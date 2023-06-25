-- Aqui você deve colocar os códigos SQL referentes às
-- Simulações de um CRUD

-- Criação
-- 1)
INSERT INTO clientes
	(nome, lealdade)
VALUES 
	('Georgia', 0);

-- 2)
INSERT INTO pedidos 
	(status, cliente_id)
VALUES 
	('Recebido', 6);

-- 3)
INSERT INTO produtos_pedidos
	(pedido_id, produto_id)
VALUES 
	(6, 1),
	(6, 2),
	(6, 6),
	(6, 8),
	(6, 8);

-- Leitura
-- 1)
SELECT 
	cl.id,
	cl.nome, 
	cl.lealdade,
	pe.id,
	pe.status,
	pr.id,
	pr.nome,
	pr.tipo,
	pr.preco,
	pr.pts_de_lealdade
FROM 
	clientes AS cl
JOIN 
	pedidos AS pe ON pe.cliente_id = cl.id
JOIN 
	produtos_pedidos AS pp ON pp.pedido_id = pe.id
JOIN 
	produtos AS pr ON pr.id = pp.produto_id 
WHERE 
	cl.nome = 'Georgia';

-- Atualização
-- 1)
UPDATE 
	clientes AS cl
SET 
	lealdade = (
	SELECT SUM(pts_de_lealdade)	
	FROM 
		produtos_pedidos AS pp
	JOIN 
		pedidos AS pe ON pe.id = pp.pedido_id 
	JOIN 
		produtos AS pr ON pr.id = pp.produto_id 
	WHERE cl.nome = 'Georgia'
	)
WHERE cl.nome = 'Georgia';

-- Deleção
-- 1)
SELECT 
	*
FROM 
	clientes;

DELETE FROM 
	clientes 
WHERE 
	nome ILIKE '%Marcelo%';


