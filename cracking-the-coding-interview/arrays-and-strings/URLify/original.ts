function urlify (s: string): string {
  return s.trim().replace(/ /g, '%20');
}