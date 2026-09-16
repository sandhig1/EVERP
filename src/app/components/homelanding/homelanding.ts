import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

type HomeSection = 'home' | 'about' | 'dealers' | 'contact';

@Component({
  selector: 'app-homelanding',
  imports: [FormsModule],
  templateUrl: './homelanding.html',
  styleUrl: './homelanding.css',
})
export class homelanding implements AfterViewInit, OnDestroy {

  protected readonly title = signal('Angular-Tutorial');

  private readonly sections: HomeSection[] = [
    'home',
    'about',
    'dealers',
    'contact'
  ];

  activeTab = signal<HomeSection>('home');

  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private router: Router) {}

  /**
   * Scroll to a section without hiding any section.
   * All four sections remain on the same page.
   */
  scrollToSection(
    page: HomeSection,
    event?: Event
  ): void {
    event?.preventDefault();

    const target = document.getElementById(page);

    if (!target) {
      return;
    }

    this.setActiveSection(page);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Keep the URL in sync without reloading the Angular page.
    history.replaceState(null, '', `#${page}`);
  }

  /**
   * Backward-compatible method.
   * Existing HTML can still call showPage(), but it now scrolls
   * instead of hiding/showing sections.
   */
  showPage(page: HomeSection): void {
    this.scrollToSection(page);
  }

  private setActiveSection(page: HomeSection): void {
    // Angular controls the active class through [class.active] in the HTML.
    // Do not manipulate .nav-link.active directly with querySelectorAll.
    this.activeTab.set(page);
  }

  /**
   * Automatically selects the menu item for the section currently visible.
   * Uses the sticky header position as the reference point.
   */
  private setupScrollTracking(): void {
    let ticking = false;

    const updateActiveSection = (): void => {
      const header = document.querySelector<HTMLElement>('.topbar');
      const headerHeight = header?.getBoundingClientRect().height ?? 80;

      // Use the real document position. This works even though the HTML
      // section order is Home -> Dealer -> About -> Contact.
      const marker = window.scrollY + headerHeight + 35;

      const visibleSections = this.sections
        .map(id => {
          const element = document.getElementById(id);
          if (!element) return null;
          return {
            id,
            top: element.getBoundingClientRect().top + window.scrollY
          };
        })
        .filter((item): item is { id: HomeSection; top: number } => item !== null)
        .sort((a, b) => a.top - b.top);

      let currentSection: HomeSection = 'home';

      for (const section of visibleSections) {
        if (marker >= section.top) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      if (window.scrollY <= 10) {
        currentSection = 'home';
      }

      if (this.activeTab() !== currentSection) {
        this.setActiveSection(currentSection);
        history.replaceState(null, '', `#${currentSection}`);
      }
    };

    const onScroll = (): void => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    this.removeScrollListeners = (): void => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };

    updateActiveSection();
  }

  private removeScrollListeners: () => void = () => {};

  login(): void {
    this.router.navigate(['/login']);
  }

  signup(): void {
    this.router.navigate(['/signup']);
  }

  setActiveTab(tabName: string): void {
    if (this.sections.includes(tabName as HomeSection)) {
      this.setActiveSection(tabName as HomeSection);
    }
  }

  onSubmit(): void {
    if (this.contactData.name && this.contactData.email) {
      alert(
        `Thank you, ${this.contactData.name}! Your message has been sent.`
      );

      this.contactData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      alert('Please fill in required fields.');
    }
  }

  openMap(): void {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Bengaluru%2C%20India',
      '_blank',
      'noopener,noreferrer'
    );
  }

  sendMessage(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert(
      'Thank you! Your message has been submitted successfully.'
    );

    form.reset();
  }

  ngAfterViewInit(): void {
    this.setupScrollTracking();

    // Open a section directly when URL contains #about, #dealers, etc.
    const hash = window.location.hash.replace('#', '') as HomeSection;

    if (this.sections.includes(hash)) {
      setTimeout(() => {
        this.scrollToSection(hash);
      }, 50);
    } else {
      this.setActiveSection('home');
    }
  }

  ngOnDestroy(): void {
    this.removeScrollListeners();
  }
}
