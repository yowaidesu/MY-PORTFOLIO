import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { MenuOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { AppState, AppAction, NavItem } from '../../types';

interface NavProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navItems: NavItem[];
}

export function Nav({ state, dispatch, navItems }: NavProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        state.menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        dispatch({ type: 'CLOSE_MENU' });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [state.menuOpen, dispatch]);

  const handleNavClick = (href: string) => {
    dispatch({ type: 'CLOSE_MENU' });
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <a
        href="#home"
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('#home');
        }}
      >
        Vince Jayson D. Redondo<span className="nav-logo-dot">.</span>
      </a>

      <nav className="nav">
        <div className="nav-actions">
          <Button
            type="text"
            icon={state.theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            aria-label="Toggle theme"
            className="theme-toggle-btn"
          />

          <div className="nav-menu-container">
            <button
              ref={btnRef}
              className="hamburger-btn"
              aria-label="Toggle menu"
              onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
            >
              <MenuOutlined />
            </button>

            <div
              ref={menuRef}
              className={`nav-dropdown ${state.menuOpen ? 'open' : ''}`}
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  className={`nav-dropdown-item ${state.activeSection === item.href.slice(1) ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
