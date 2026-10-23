export const $ = (selector, root=document) => root.querySelector(selector);
export const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
export const create = (tag, attrs={}) => {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key,value]) => key === 'text' ? el.textContent=value : el.setAttribute(key,value));
  return el;
};
