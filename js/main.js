/**
 * Fluid Vector AR - Main Interactive Application Script
 * Controls mode switching, interactive reticle playground, policy modals,
 * tip jar selector, FAQ accordion, and navigation interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStudioTabs();
  initReticlePlayground();
  initPolicyModals();
  initTipJarModal();
  initWaitlistModal();
  initFaqAccordion();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileNav) return;

  const toggleNav = (open) => {
    if (open) {
      mobileNav.classList.remove('hidden');
      setTimeout(() => mobileNav.classList.remove('opacity-0', '-translate-y-4'), 10);
    } else {
      mobileNav.classList.add('opacity-0', '-translate-y-4');
      setTimeout(() => mobileNav.classList.add('hidden'), 250);
    }
  };

  menuBtn.addEventListener('click', () => toggleNav(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggleNav(false));

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
  });
}

/* --------------------------------------------------------------------------
   2. Interactive Phone Mockup Studio Switcher
   -------------------------------------------------------------------------- */
function initStudioTabs() {
  const tabButtons = document.querySelectorAll('.studio-tab');
  const modeViews = {
    vector: document.getElementById('mockup-mode-vector'),
    camera: document.getElementById('mockup-mode-camera'),
    ar: document.getElementById('mockup-mode-ar')
  };

  const statusLabel = document.getElementById('mockup-mode-label');
  const stencilSlider = document.getElementById('mockup-stencil-slider');
  const stencilOverlay = document.getElementById('camera-stencil-vector');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMode = btn.getAttribute('data-mode');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      Object.entries(modeViews).forEach(([key, view]) => {
        if (!view) return;
        if (key === targetMode) {
          view.classList.remove('hidden');
          view.classList.add('flex');
        } else {
          view.classList.add('hidden');
          view.classList.remove('flex');
        }
      });

      if (statusLabel) {
        if (targetMode === 'vector') {
          statusLabel.innerHTML = '<span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Vector Mode: Cubic Bezier Active';
        } else if (targetMode === 'camera') {
          statusLabel.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Camera Stencil: Real-time Tracing Overlay';
        } else if (targetMode === 'ar') {
          statusLabel.innerHTML = '<span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span> Google ARCore: 3D Spatial Anchor Locked';
        }
      }
    });
  });

  // Stencil opacity slider
  if (stencilSlider && stencilOverlay) {
    stencilSlider.addEventListener('input', (e) => {
      const val = e.target.value / 100;
      stencilOverlay.style.opacity = val;
      const valDisplay = document.getElementById('mockup-stencil-val');
      if (valDisplay) valDisplay.textContent = `${e.target.value}%`;
    });
  }
}

/* --------------------------------------------------------------------------
   3. Interactive Virtual Reticle Simulator Playground
   -------------------------------------------------------------------------- */
function initReticlePlayground() {
  const playground = document.getElementById('reticle-demo-area');
  const touchPoint = document.getElementById('demo-touch-point');
  const reticlePoint = document.getElementById('demo-reticle-point');
  const connectorLine = document.getElementById('demo-connector-line');
  const sliderX = document.getElementById('reticle-slider-x');
  const sliderY = document.getElementById('reticle-slider-y');
  const labelX = document.getElementById('reticle-val-x');
  const labelY = document.getElementById('reticle-val-y');

  if (!playground || !touchPoint || !reticlePoint) return;

  let offsetX = 0;
  let offsetY = -80; // Default reticle is offset above finger

  if (sliderX) {
    sliderX.addEventListener('input', (e) => {
      offsetX = parseInt(e.target.value, 10);
      if (labelX) labelX.textContent = `${offsetX > 0 ? '+' : ''}${offsetX}px`;
      updateReticle();
    });
  }

  if (sliderY) {
    sliderY.addEventListener('input', (e) => {
      offsetY = parseInt(e.target.value, 10);
      if (labelY) labelY.textContent = `${offsetY > 0 ? '+' : ''}${offsetY}px`;
      updateReticle();
    });
  }

  let currentTouchX = 180;
  let currentTouchY = 160;

  function updateReticle() {
    touchPoint.style.left = `${currentTouchX}px`;
    touchPoint.style.top = `${currentTouchY}px`;

    const reticleX = currentTouchX + offsetX;
    const reticleY = currentTouchY + offsetY;

    reticlePoint.style.left = `${reticleX}px`;
    reticlePoint.style.top = `${reticleY}px`;

    if (connectorLine) {
      connectorLine.setAttribute('x1', currentTouchX);
      connectorLine.setAttribute('y1', currentTouchY);
      connectorLine.setAttribute('x2', reticleX);
      connectorLine.setAttribute('y2', reticleY);
    }
  }

  const handlePointerMove = (e) => {
    const rect = playground.getBoundingClientRect();
    const x = Math.max(20, Math.min(rect.width - 20, e.clientX - rect.left));
    const y = Math.max(40, Math.min(rect.height - 40, e.clientY - rect.top));

    currentTouchX = x;
    currentTouchY = y;
    updateReticle();
  };

  playground.addEventListener('mousemove', handlePointerMove);
  playground.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      const touch = e.touches[0];
      handlePointerMove({ clientX: touch.clientX, clientY: touch.clientY });
    }
  }, { passive: true });

  // Initial draw
  updateReticle();
}

/* --------------------------------------------------------------------------
   4. Merchant Compliance Policy Modals
   -------------------------------------------------------------------------- */
function initPolicyModals() {
  const modalTriggers = document.querySelectorAll('[data-open-modal]');
  const closeTriggers = document.querySelectorAll('[data-close-modal]');
  const backdrop = document.getElementById('policy-modal-backdrop');

  const modals = {
    refund: document.getElementById('modal-refund-policy'),
    delivery: document.getElementById('modal-delivery-policy'),
    contact: document.getElementById('modal-contact-details'),
    terms: document.getElementById('modal-terms-summary'),
    privacy: document.getElementById('modal-privacy-summary')
  };

  const openModal = (modalKey) => {
    if (!backdrop) return;
    Object.values(modals).forEach(m => m && m.classList.add('hidden'));

    const target = modals[modalKey];
    if (target) {
      target.classList.remove('hidden');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (!backdrop) return;
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = btn.getAttribute('data-open-modal');
      openModal(modalKey);
    });
  });

  closeTriggers.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  // Keyboard escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Copy email utility
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'fluidcraftstudios@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const origText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-emerald-400 font-medium">Copied!</span>
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = origText;
        }, 2200);
      });
    });
  }
}

/* --------------------------------------------------------------------------
   5. Creator Tip Jar Modal
   -------------------------------------------------------------------------- */
function initTipJarModal() {
  const openBtns = document.querySelectorAll('.open-tip-jar-btn');
  const tipModal = document.getElementById('tip-jar-modal');
  const closeBtn = document.getElementById('close-tip-jar');
  const tipOptions = document.querySelectorAll('.tip-preset-btn');
  const customInput = document.getElementById('custom-tip-input');
  const tipSubmitBtn = document.getElementById('submit-tip-btn');
  const tipSummaryDisplay = document.getElementById('tip-summary-amount');

  if (!tipModal) return;

  let selectedAmount = '99';

  const updateSelectedState = (amt) => {
    selectedAmount = amt;
    tipOptions.forEach(opt => {
      if (opt.getAttribute('data-amount') === amt) {
        opt.classList.add('border-cyan-400', 'bg-cyan-500/20', 'text-cyan-300');
        opt.classList.remove('border-slate-700', 'bg-slate-800/60', 'text-slate-300');
      } else {
        opt.classList.remove('border-cyan-400', 'bg-cyan-500/20', 'text-cyan-300');
        opt.classList.add('border-slate-700', 'bg-slate-800/60', 'text-slate-300');
      }
    });

    if (tipSummaryDisplay) {
      tipSummaryDisplay.textContent = `₹${amt}`;
    }
  };

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tipModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      updateSelectedState('99');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      tipModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  tipModal.addEventListener('click', (e) => {
    if (e.target === tipModal) {
      tipModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  tipOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const amt = btn.getAttribute('data-amount');
      if (customInput) customInput.value = '';
      updateSelectedState(amt);
    });
  });

  if (customInput) {
    customInput.addEventListener('input', (e) => {
      const val = e.target.value.replace(/[^0-9]/g, '');
      if (val && parseInt(val, 10) > 0) {
        tipOptions.forEach(opt => {
          opt.classList.remove('border-cyan-400', 'bg-cyan-500/20', 'text-cyan-300');
          opt.classList.add('border-slate-700', 'bg-slate-800/60', 'text-slate-300');
        });
        selectedAmount = val;
        if (tipSummaryDisplay) tipSummaryDisplay.textContent = `₹${val}`;
      }
    });
  }

  if (tipSubmitBtn) {
    tipSubmitBtn.addEventListener('click', () => {
      showToast(`Thank you for choosing to support Fluid Vector AR with ₹${selectedAmount}! Payment gateway connection will be active upon Google Play public rollout.`);
      tipModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
}

/* --------------------------------------------------------------------------
   6. Waitlist Modal
   -------------------------------------------------------------------------- */
function initWaitlistModal() {
  const waitlistBtns = document.querySelectorAll('.open-waitlist-btn');
  const modal = document.getElementById('waitlist-modal');
  const closeBtn = document.getElementById('close-waitlist-btn');
  const form = document.getElementById('waitlist-form');
  const emailInput = document.getElementById('waitlist-email');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (emailInput) emailInput.focus();
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  waitlistBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput ? emailInput.value.trim() : '';
      if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }

      showToast(`🎉 You're on the waitlist! We'll notify ${email} as soon as Pro / AI features go live.`);
      if (emailInput) emailInput.value = '';
      closeModal();
    });
  }
}

/* --------------------------------------------------------------------------
   7. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Close all others
      faqItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.faq-content');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherContent) otherContent.classList.add('hidden');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Toast Notification Utility
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'glass-card border border-cyan-500/40 bg-slate-900/90 text-slate-100 p-4 rounded-xl shadow-2xl flex items-start gap-3 pointer-events-auto transform translate-y-4 opacity-0 transition-all duration-300';
  toast.innerHTML = `
    <div class="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div class="text-sm leading-relaxed">${message}</div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 350);
  }, 5000);
}

/* --------------------------------------------------------------------------
   9. Smooth Scrolling
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
