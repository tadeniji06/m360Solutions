"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: true,
};

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("m360_cookie_consent");
    if (!stored) {
      setShowBanner(true);
    } else {
      try {
        setPreferences(JSON.parse(stored));
      } catch {
        setShowBanner(true);
      }
    }

    const handleOpenPreferences = () => {
      setShowModal(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("m360_cookie_consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const handleRejectNonEssential = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Cookie Consent Floating Bar */}
      {showBanner && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:left-8 md:right-8 lg:left-auto lg:right-8 lg:max-w-xl z-50 animate-in fade-in slide-in-from-bottom duration-300"
        >
          <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-4 sm:p-5 text-slate-800">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center shrink-0 text-orange-600">
                <Icon icon="mdi:cookie" className="text-xl" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900 text-sm">We Value Your Privacy</h3>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  We use cookies and tracking technologies to optimize platform functionality, analyze traffic, and support advertising delivery under the Nigeria Data Protection Act (NDPA &amp; GAID). Read our{" "}
                  <Link
                    href="/privacy-policy#cookies"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto flex-1 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-medium text-xs py-2 px-3.5 rounded-xl transition duration-150"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto flex-1 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-medium text-xs py-2 px-3.5 rounded-xl transition duration-150"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto text-slate-600 hover:text-slate-900 font-medium text-xs py-2 px-2.5 transition"
              >
                Preferences
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-5 sm:p-7 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <Icon icon="mdi:shield-check-outline" className="text-orange-500 text-xl" />
                <h3 id="cookie-modal-title" className="font-semibold text-slate-900 text-base sm:text-lg">
                  Cookie Preferences
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                aria-label="Close modal"
              >
                <Icon icon="mdi:close" className="text-xl" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              Customize which cookies and tracking technologies you permit while using the M360 Solutions Platform and website. You can change your preferences at any time.
            </p>

            <div className="mt-5 space-y-3">
              {/* Essential */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm">Essential Cookies</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      Required
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="w-4 h-4 rounded text-orange-500 focus:ring-orange-400 cursor-not-allowed opacity-75"
                  />
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Necessary for website security, user sessions, authentication, and core platform operations. Cannot be disabled.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm">Analytics &amp; Performance</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Helps us understand how visitors interact with our website to diagnose issues, measure campaign analytics, and enhance user experience.
                </p>
              </div>

              {/* Marketing */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm">Advertising &amp; Targeting</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Used by our white-label ad technology platform to deliver relevant campaigns, perform frequency capping, and prevent ad fraud.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white transition"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
