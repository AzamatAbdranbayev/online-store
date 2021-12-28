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


INSERT INTO public.catalog (id, name) VALUES (1, 'Автошины');
INSERT INTO public.catalog (id, name) VALUES (2, 'Запасные части');

INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (1,1, 'Грузовые шины');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (2,1, 'Легковые шины');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (3,1, 'Легкогрузовые шины');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (4,1, 'Сельскохозяйственные шины');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (5,1, 'Шины для спецтехники');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (6,1, 'Камеры');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (7,1, 'Флипера');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (8,2, 'Фильтра');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (9,2, 'Масла');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (10,2, 'Охлаждающие жидкости');
INSERT INTO public.catalogproducts (id,idCatalog, name) VALUES (11,2, 'Диски');