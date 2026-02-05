"use client";

interface Page {
  slug: string;
  title: string;
}

interface NavBarProps {
  pages: Page[];
  current: string;
  onNavigate: (slug: string) => void;
}

export default function NavBar({ pages, current, onNavigate }: NavBarProps) {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        borderBottom: "1px solid #ddd",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {pages.map((page) => (
        <button
          key={page.slug}
          onClick={() => onNavigate(page.slug)}
          style={{
            background: "none",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: current === page.slug ? "bold" : "normal",
            textDecoration: current === page.slug ? "underline" : "none",
          }}
        >
          {page.title}
        </button>
      ))}
    </nav>
  );
}
