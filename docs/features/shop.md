---
sidebar_position: 3
---

# Shop

Boost provides `EasyShop` integration with stripe. It is focused around providing user easy way to fetch products from stripe and add programatic rewards. 

## Stripe config

Go to `.env` and configure stripe variables by providing keys to your shop, additionally specify domain your server works under so it can redirect you to success or fail APIs:
```Bash
# STRIPE CONFIGURATION
STRIPE_SECRET=sk_test_51OQAT4KqXWCUhsM7Gi79UWQ0uX29jZ7QL7jrL24XgerUBh5VNCbd9e6PDURw5BpW3K7Y5Td5LgZ6UVFWLpdrFt3I00WD1ffRRg
STRIPE_YOUR_DOMAIN=http://localhost:5000
```

## EasyShop

### Create your stripe product:

Follow this link to add new product: https://support.stripe.com/questions/how-to-create-products-and-prices

### Registering Stripe Product:

First you need to register Stripe product from your shop. You can do it in `shop/__init__.py` with:

```Python
EasyShop().register("100_Tokens",rewards.add_100_tokens)
```

:::info
It is important to remember that name has to overlap with name of product you have putted into your stripe dashboard.
:::

You may notice that there is `rewards.add_100_tokens` this is function called on successful payment. 

### Add rewards:

You can specify your rewards anywhere but we recommend to user for it `shop/rewards.py`, then simply follow this format:

```
def add_100_tokens(user, productName : str) -> None:
  user.available_tokens += 100
```

### Access product:

`EasyShop` uses products names to let you access all rewards. You get reward via:

```Python
EasyShop().get_reward("productName")
```

You can also get stripe product price object with:
```Python
EasyShop().get_price("productName")
```

Or you can get ids of both price and product assigned by stripe with:

```Python
product_id, price_id = EasyShop().get_id("productName")
```

And most importantly you can create payment link with:

```Python
product_id, price_id = EasyShop().create_payment("productName")
```

# Restart

After restarting your server all new products will be available via register. 