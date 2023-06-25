-- Aqui você deve colocar os códigos SQL referentes às
-- Seleções de dados

-- 1)
SELECT 
	*
FROM 
	pedidos AS pe 
JOIN 
	produtos AS pr ON pr.id = pe.id;

-- 2)
SELECT 
	pp.pedido_id 
FROM 
	pedidos AS pe 
JOIN 
	produtos_pedidos AS pp ON pp.pedido_id = pe.id
JOIN 
	produtos AS pr ON pr.id = pp.produto_id 
WHERE 
	pr.nome = 'Fritas';

-- 3)
SELECT 
	cl.nome AS gostam_de_fritas
FROM 
	pedidos AS pe 
JOIN 
	clientes AS cl ON cl.id = pe.cliente_id 
JOIN 
	produtos_pedidos AS pp ON pp.pedido_id = pe.id
JOIN 
	produtos AS pr ON pr.id = pp.produto_id 
WHERE 
	pr.nome = 'Fritas';

-- 4)
SELECT 
	SUM(CAST(pr.preco AS NUMERIC (15,3)))
FROM 
	pedidos AS pe
JOIN 
	clientes AS cl ON cl.id = pe.cliente_id 
JOIN 
	produtos_pedidos AS pp ON pp.pedido_id = pe.id 
JOIN 
	produtos AS pr ON pr.id = pp.produto_id 
WHERE 
	cl.nome = 'Laura';

-- 5)
SELECT 
	pr.nome, 
	COUNT(pr.nome) AS count
	--*
FROM 
	pedidos AS pe
JOIN 	
	produtos_pedidos AS pp ON pp.pedido_id = pe.id  
JOIN 
	produtos AS pr ON pr.id = pp.produto_id 
GROUP BY 
	pr.nome
ORDER BY 
	pr.nome; 