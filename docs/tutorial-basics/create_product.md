---
sidebar_position: 2
---

# Create Product

Products allow for easy integration with your stripe shop.

:::warning

You need to have product with same name in your shop and server needs to be configured to have API keys

:::

## Register your product

To register your product: go to `app\shop`, and open `__init__.py` which serves as register for products. As you can see a lot of static resource allocation happens in `__init__s.py` keep that in mind as we will go with this philosophy. After opening `__init__.py` you can add following line:

```Python
EasyShop().register("<Your_Product_Name>",rewards.your_reward)
```

The `<Your_Product_Name>` should match your product name in stripe, as it is how it fetches it. Next step we need to add is reward user gets on buying that product.

## Create rewards:

Go to `rewards.py` and add function

```Python
def your_reward(user,productName):
    user.available_tokens += 1000
```

This will make that after buying this product user is granted `1000` tokens.

## Give user access to the product

For now you need to manualy give access to the product, by editing your shop website and embedding code like this:

```html
<section class="product-card">
    <div class="product row">
        <div class="col">
            <div class="description">
                <h3>100 Tokens</h3>
            </div>
        </div>
    </div>
    <form action="/create-checkout-session?productName=<Your_Product_Name>&user_id={{ user.id }}" method="POST">
        <button class="product-card-btn col" type="submit" id="checkout-button">$20.00</button>
    </form>
</section>
```

:::warning

Do not edit this part: `{{ user.id }}` as it is flask template and is filled up automatically. 

:::