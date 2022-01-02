
# Documentação da API


## rotas de autenticação
### criar uma conta
```http
  POST /api/auth/register
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `username` | `string` | **Obrigatório**. | BODY
| `email` | `string` | **Obrigatório**. | BODY
| `password` | `string` | **Obrigatório**.| BODY

#### requisição/resposta
![auth 1](https://github.com/matheusgit1/ecommerce-api/blob/main/api/auth/register.PNG)

### login
```http
  POST /api/auth/login
```
| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `user_name` | `string` | **Obrigatório**. | BODY
| `password` | `string` | **Obrigatório**.| BODY

#### requisição/resposta
![auth 2](https://github.com/matheusgit1/ecommerce-api/blob/main/api/auth/login.PNG)

### accessToken
use o "accessToken" retornado nos campos de login da aplicação para trabalhar nas rotas logadas.
use "Bearer [accessToken]" nos headers de cada requisição

### atualizar dados de um usuario
```http
  PUT /api/auth/:id
```
| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` |id de usuario. **Obrigatório**  | parametro da url
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

utilize o id de usuario para localizar um usario e atualizar suas informações.
 no body da requisição passe os campos que deseja que sofram atualizações :)

#### requisição/resposta
![auth 3](https://github.com/matheusgit1/ecommerce-api/blob/main/api/auth/update_user.PNG)

### recuperar dados de um usuario
```http
  GET /api/auth/:id
```
| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` |id de usuario. **Obrigatório**  | parametro da url
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

#### requisição/resposta
![auth 4](https://github.com/matheusgit1/ecommerce-api/blob/main/api/auth/get_user.PNG)


## rotas de produtos

### criar uma produto
```http
  POST /api/products/
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `title` | `string` | nome do produto. **Obrigatório**. | BODY
| `desc` | `string` | descrição. **Obrigatório**. | BODY
| `img` | `array` | links de imagens. **Obrigatório**.| BODY
| `categories` | `array` | lista de categorias. **Obrigatório**.| BODY
| `size` | `string` | tamanho. **Obrigatório**.| BODY
| `color` | `string` | cor. **Obrigatório**.| BODY
| `price` | `string` | preço. **Obrigatório**.| BODY
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

#### requisição/resposta
![prod 1](https://github.com/matheusgit1/ecommerce-api/blob/main/api/products/create%20product.PNG)

### recuperar dados de um produto
```http
  GET /api/products/find/:id
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id do produto. **Obrigatório**. | parametro da url
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

#### requisição/resposta
![prod 2](https://github.com/matheusgit1/ecommerce-api/blob/main/api/products/get%20product.PNG)

### recuperar todos os produtos
```http
  GET /api/products/
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

#### requisição/resposta
![prod 3](https://github.com/matheusgit1/ecommerce-api/blob/main/api/products/get%20all%20products.PNG)

### atulizar informações de um produto
```http
  PUT /api/products/:id
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id do produto. **Obrigatório**. | parametro da url
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

utilize o id de produto para localiza-lo e atualizar suas informações.
no body da requisição passe os campos que deseja que sofram atualizações :)

#### requisição/resposta
![prod 4](https://github.com/matheusgit1/ecommerce-api/blob/main/api/products/update%20a%20product.PNG)

### deletar um produto
```http
  DEL /api/products/:id
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id do produto. **Obrigatório**. | parametro da url
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

#### requisição/resposta
![prod 5](https://github.com/matheusgit1/ecommerce-api/blob/main/api/products/delete%20a%20product.PNG)

## rotas de compras
### criar uma compra 
```http
  POST /api/orders
```


| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY
| `products` | `array` | array contendo os campos e produtos da compra. **Obrigatório**. | BODY
| `productId` | `string` | id de produto. **Obrigatório**.| BODY
| `quantity` | `number` | quantidade de cada item. **Obrigatório**.| BODY
| `amount` | `number` | valor total de pedidos. **Obrigatório**.| BODY
| `address` | `string` | endereço final. **Obrigatório**.| BODY
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

o array de objetos do compo "products" não possui tamanho fixo,
faça: ```products[{productId: productId,quantity: quantity},...]```

#### requisição/resposta
![order 1](https://github.com/matheusgit1/ecommerce-api/blob/main/api/orders/create%20order.PNG)


### atualizar uma ordem
```http
  PUT /api/orders/:id
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id de ordem. **Obrigatório**. | parametro da url
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY
| `products` | `array` | array contendo os campos e produtos da compra. **Obrigatório**. | BODY
| `productId` | `string` | id de produto. **Obrigatório**.| BODY
| `quantity` | `number` | quantidade de cada item. **Obrigatório**.| BODY
| `amount` | `number` | valor total de pedidos. **Obrigatório**.| BODY
| `address` | `string` | endereço final. **Obrigatório**.| BODY
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers

o array de objetos do compo "products" não possui tamanho fixo,
faça: ```products[{productId: productId,quantity: quantity},...]```



#### requisição/resposta
![order 2](https://github.com/matheusgit1/ecommerce-api/blob/main/api/orders/update%20a%20order.PNG)

### recuperar ordens
```http
  GET /api/orders/:id
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id de usario. **Obrigatório**. | parametro da url
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers



#### requisição/resposta
![order 3](https://github.com/matheusgit1/ecommerce-api/blob/main/api/orders/get%20all%20orders.PNG)


### deletar uma ordem
```http
  DEL /api/orders/:id
```

| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id de usario. **Obrigatório**. | parametro da url
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers



#### requisição/resposta
![order 4](https://github.com/matheusgit1/ecommerce-api/blob/main/api/orders/get%20all%20orders.PNG)


## rotas de carrinho
### criar um carrinho
```http
  POST /api/carts/
```


| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY
| `products` | `array` | **Obrigatório**. | BODY
| `productId` | `string` | id de produto. **Obrigatório**.| BODY
| `quantity` | `number` | quantidade de itens pro produto. **Obrigatório**.| BODY
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers


o array de objetos do compo "products" não possui tamanho fixo,
faça: ```products[{productId: productId,quantity: quantity},...]```


#### requisição/resposta
![cart 1](https://github.com/matheusgit1/ecommerce-api/blob/main/api/cart/create.PNG)

### atualiza um carrinho
```http
  PUT /api/carts/:id
```


| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id de usuario. **Obrigatório**. | parametro da url
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY
| `products` | `array` | **Obrigatório**. | BODY
| `productId` | `string` | id de produto. **Obrigatório**.| BODY
| `quantity` | `number` | quantidade de itens pro produto. **Obrigatório**.| BODY
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers


o array de objetos do compo "products" não possui tamanho fixo,
faça: ```products[{productId: productId,quantity: quantity},...]```


#### requisição/resposta
![cart 2](https://github.com/matheusgit1/ecommerce-api/blob/main/api/cart/update%20a%20cart.PNG)

### recuperar carrinho de usuario
```http
  PUT /api/carts/:id
```


| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id de usuario. **Obrigatório**. | parametro da url
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY
| `products` | `array` | **Obrigatório**. | BODY
| `productId` | `string` | id de produto. **Obrigatório**.| BODY
| `quantity` | `number` | quantidade de itens pro produto. **Obrigatório**.| BODY
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers


o array de objetos do compo "products" não possui tamanho fixo,
faça: ```products[{productId: productId,quantity: quantity},...]```


#### requisição/resposta
![cart 3](https://github.com/matheusgit1/ecommerce-api/blob/main/api/cart/get%20user%20cart.PNG)

### deletar o carrinho de um usuario
```http
  DEL /api/carts/:id
```


| Parâmetro   | Tipo       | Descrição  |                          |
| :---------- | :--------- | :----------|:-------- |
| `id` | `string` | id de usuario. **Obrigatório**. | parametro da url
| `Bearer ${accessToken}` | `string` |token de usuario. **Obrigatório**  | headers


#### requisição/resposta
![cart 4](https://github.com/matheusgit1/ecommerce-api/blob/main/api/cart/delete%20cart.PNG)
