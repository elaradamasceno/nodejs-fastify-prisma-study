// src/utils/generate-slug.ts
var gerenteSlug = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
};

export {
  gerenteSlug
};
