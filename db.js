import database from './API/usingdb/db/index'

/**
 * Create Tables
 */
async function createTables() {

    const enum_account = `CREATE TYPE user_role AS ENUM ('User', 'Admin');`;
    const enum_role = `CREATE TYPE status AS ENUM ('New' , 'Processing' , 'Cancelled', 'Complete');`;
    const userAccounts = `CREATE TABLE IF NOT EXISTS user_accounts(
        user_id SERIAL PRIMARY KEY,
        user_name varchar(255) NOT NULL,
        user_role user_role DEFAULT 'User',
        user_email varchar(255) NOT NULL UNIQUE,
        user_password varchar(255) NOT NULL,
        created_date TIMESTAMP DEFAULT NOW(),
        modified_date TIMESTAMP DEFAULT NULL
      );`;
    const foodItems = `CREATE TABLE IF NOT EXISTS food_items(
        item_id SERIAL PRIMARY KEY,
        item_name varchar(255) NOT NULL UNIQUE,
        item_image varchar(255) NOT NULL,
        item_price integer NOT NULL,
        item_tag varchar(255) NOT NULL,
        created_date TIMESTAMP DEFAULT NOW(),
        modified_date TIMESTAMP DEFAULT NULL
      );`;
    const orders = `CREATE TABLE IF NOT EXISTS orders(
        Order_id SERIAL PRIMARY KEY,
        item_id integer NOT NULL UNIQUE,
        FOREIGN KEY (item_id) REFERENCES food_items (item_id),
        quantity integer NOT NULL,
        total_price integer NOT NULL,
        order_status status DEFAULT 'New',
        customer_address varchar(255) NOT NULL,
        customer_id integer NOT NULL,
        FOREIGN KEY (customer_id) REFERENCES user_accounts (user_id),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NULL
      );`;
    let user_data = `INSERT INTO user_accounts (user_name,user_role,user_email,user_password)
      VALUES ('testName', 'User', 'testEmail@address.com', 'p@ssword123'),
      ('tester', 'Admin', 'tester@owner.com', 'p@$$word123');`

    let order_data = `INSERT INTO orders (item_id, quantity, total_price, order_status,customer_id, customer_address)
      VALUES ('1', '2', '2000', 'New', '1', 'Andela EPIC Tower, Lagos' ),('2', '1','1000','Processing','2', 'Andela EPIC Tower, Ibadan' )`

    let item_data = `INSERT INTO food_items (item_name,item_image,item_price,item_tag)
       VALUES ('Doughnut', 'imageSrc', '2000', 'snacks'),
        ('Amala', 'imageSrc', '5000', 'Local dish');`

    const input = enum_account + enum_role + userAccounts + foodItems + orders;
    const create = user_data + item_data + order_data;
    await database.query(input);
    await database.query(create);
}

/**
 * Drop Table
 */
const dropTables = () => {
    const queryText = 'DROP TABLE IF EXISTS user_accounts, food_items, orders; DROP TYPE IF EXISTS user_role, status';
    database.query(queryText);
}


module.exports = {
    createTables,
    dropTables
};

async function instantiateTables() {
    try {
        // drop existing tables
        await dropTables();

        // create new tables
        await createTables();
        console.log('All Tables created successfully!');
    } catch (err) {
        console.log(err);
    }
}

instantiateTables();