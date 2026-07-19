import React from "react";
import Header from '../header/Header'

export const PortfolioLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-ink relative">
      <Header />

      {/* Main page content inside canvas-overlay-mode */}
      <main className="canvas-overlay-mode relative z-10">{children}</main>

      <footer className="py-8 relative z-10 canvas-overlay-mode bg-brand-dark text-white border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-sm">
          <span className="text-brand-accent">©</span> {new Date().getFullYear()} Marlon
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLayout;
