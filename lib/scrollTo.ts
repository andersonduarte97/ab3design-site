export function scrollTo(e: React.MouseEvent, href: string) {
  if (!href.startsWith('#')) return;
  e.preventDefault();
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
