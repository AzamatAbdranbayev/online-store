const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'azathebest125',
  host: 'localhost',
  port: 5432,
  database: 'tayressauda',
});

const execute = async (query) => {
  try {
    await pool.connect(); // gets connection
    await pool.query(query); // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    await pool.end(); // closes connection
  }
};

const text = `
create TABLE IF NOT EXISTS public.user(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  token VARCHAR(255) UNIQUE,
  phone VARCHAR(255) UNIQUE
);

create TABLE IF NOT EXISTS public.catalog(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

create TABLE IF NOT EXISTS public.catalogproducts(
  id SERIAL PRIMARY KEY,
  idCatalog bigint NOT NULL REFERENCES public.catalog(id),
  name VARCHAR(255)
);
create TABLE IF NOT EXISTS public.tyres(
  id SERIAL PRIMARY KEY,
  idcatalogproduct bigint NOT NULL REFERENCES public.catalogproducts(id),
  name VARCHAR(255),
  photo VARCHAR(255),
  description VARCHAR(1024),
  price bigint,
  radius bigint,
  width bigint,
  height bigint,
  type VARCHAR(255),
  count bigint,
  season VARCHAR(255),
  studded VARCHAR(255)
);

INSERT INTO public.catalog (id, name) SELECT 1, 'Автошины' WHERE NOT EXISTS ( SELECT id FROM public.catalog WHERE id=1);    
INSERT INTO public.catalog (id, name) SELECT 2, 'Запасные части' WHERE NOT EXISTS ( SELECT id FROM public.catalog WHERE id=2);    

INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 1,1, 'Грузовые шины' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=1);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 2,1, 'Легковые шины' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=2);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 3,1, 'Легкогрузовые шины' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=3);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 4,1, 'Сельскохозяйственные шины' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=4);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 5,1, 'Шины для спецтехники' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=5);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 6,1, 'Камеры' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=6);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 7,1, 'Флипера' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=7);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 8,2, 'Фильтра' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=8);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 9,2, 'Масла' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=9);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 10,2, 'Охлаждающие жидкости' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=10);    
INSERT INTO public.catalogproducts (id,idCatalog, name) SELECT 11,2, 'Диски' WHERE NOT EXISTS ( SELECT id FROM public.catalogproducts WHERE id=11);    
`;
execute(text).then((result) => {
  if (result) {
    console.log('Tables created');
  }
});
module.exports = pool;
