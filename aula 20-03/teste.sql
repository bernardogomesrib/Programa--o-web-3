Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Categoria' AND TABLE_SCHEMA = 'sequelize'
Conectado no banco de dados
Executing (default): CREATE TABLE IF NOT EXISTS `Categoria` (`id` BIGINT auto_increment , `nome` VARCHAR(100) NOT NULL, `descricao` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Categoria`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Clientes' AND TABLE_SCHEMA = 'sequelize'
Executing (default): CREATE TABLE IF NOT EXISTS `Clientes` (`id` BIGINT auto_increment , `nome` VARCHAR(100) NOT NULL, `email` VARCHAR(100) NOT NULL UNIQUE, `endereco` VARCHAR(255) NOT NULL, `telefone` VARCHAR(20) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Clientes`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Produtos' AND TABLE_SCHEMA = 'sequelize'
Executing (default): CREATE TABLE IF NOT EXISTS `Produtos` (`id` BIGINT auto_increment , `nome` VARCHAR(255) NOT NULL, `descricao` TEXT, `preco` DECIMAL(10,2) NOT NULL, `disponivel` TINYINT(1) NOT NULL DEFAULT true, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Produtos`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'ItensPedidos' AND TABLE_SCHEMA = 'sequelize'
Executing (default): CREATE TABLE IF NOT EXISTS `ItensPedidos` (`produtoId` BIGINT NOT NULL , `clienteId` BIGINT NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `ClienteId` BIGINT , PRIMARY KEY (`produtoId`, `ClienteId`), FOREIGN KEY (`produtoId`) REFERENCES `Produtos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`ClienteId`) REFERENCES `Clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Erro ao sincronizar o banco de dados: Duplicate column name 'ClienteId'