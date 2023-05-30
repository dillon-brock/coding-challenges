function toUnderscore(string) {
  return typeof string === 'string' ? 
    string.replace(/([A-Z])/g, '_$1')
      .substring(1).toLowerCase() 
    : string.toString();
}