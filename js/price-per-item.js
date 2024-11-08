customElements.get('price-per-item') ||
  customElements.define(
    'price-per-item',
    class extends HTMLElement {
      constructor() {
        super(),
          (this.variantId = this.dataset.variantId),
          (this.input = document.getElementById(
            `Quantity-${this.dataset.sectionId || this.dataset.variantId}`
          )),
          this.input &&
            this.input.addEventListener(
              'change',
              this.onInputChange.bind(this)
            ),
          this.getVolumePricingArray();
      }
      updatePricePerItemUnsubscriber = void 0;
      variantIdChangedUnsubscriber = void 0;
      connectedCallback() {
        (this.variantIdChangedUnsubscriber = subscribe(
          PUB_SUB_EVENTS.variantChange,
          (event) => {
            (this.variantId = event.data.variant.id.toString()),
              this.getVolumePricingArray();
          }
        )),
          (this.updatePricePerItemUnsubscriber = subscribe(
            PUB_SUB_EVENTS.cartUpdate,
            (response) => {
              if (response.cartData)
                if (response.cartData.variant_id !== void 0)
                  response.productVariantId === this.variantId &&
                    this.updatePricePerItem(response.cartData.quantity);
                else if (response.cartData.item_count !== 0) {
                  const isVariant = response.cartData.items.find(
                    (item) => item.variant_id.toString() === this.variantId
                  );
                  isVariant && isVariant.id.toString() === this.variantId
                    ? this.updatePricePerItem(isVariant.quantity)
                    : this.updatePricePerItem(0);
                } else this.updatePricePerItem(0);
            }
          ));
      }
      disconnectedCallback() {
        this.updatePricePerItemUnsubscriber &&
          this.updatePricePerItemUnsubscriber(),
          this.variantIdChangedUnsubscriber &&
            this.variantIdChangedUnsubscriber();
      }
      onInputChange() {
        this.updatePricePerItem();
      }
      updatePricePerItem(updatedCartQuantity) {
        this.input &&
          ((this.enteredQty = parseInt(this.input.value)),
          (this.step = parseInt(this.input.step))),
          (this.currentQtyForVolumePricing =
            updatedCartQuantity === void 0
              ? this.getCartQuantity(updatedCartQuantity) + this.enteredQty
              : this.getCartQuantity(updatedCartQuantity) +
                parseInt(this.step)),
          this.classList.contains('variant-item__price-per-item') &&
            (this.currentQtyForVolumePricing =
              this.getCartQuantity(updatedCartQuantity));
        for (let pair of this.qtyPricePairs)
          if (this.currentQtyForVolumePricing >= pair[0]) {
            const pricePerItemCurrent = document.querySelector(
              `price-per-item[id^="Price-Per-Item-${
                this.dataset.sectionId || this.dataset.variantId
              }"] .price-per-item span`
            );
            this.classList.contains('variant-item__price-per-item')
              ? (pricePerItemCurrent.innerHTML =
                  window.quickOrderListStrings.each.replace('[money]', pair[1]))
              : (pricePerItemCurrent.innerHTML = pair[1]);
            break;
          }
      }
      getCartQuantity(updatedCartQuantity) {
        return updatedCartQuantity || updatedCartQuantity === 0
          ? updatedCartQuantity
          : parseInt(this.input.dataset.cartQuantity);
      }
      getVolumePricingArray() {
        const volumePricing = document.getElementById(
          `Volume-${this.dataset.sectionId || this.dataset.variantId}`
        );
        (this.qtyPricePairs = []),
          volumePricing &&
            volumePricing.querySelectorAll('li').forEach((li) => {
              const qty = parseInt(
                  li.querySelector('span:first-child').textContent
                ),
                price = li.querySelector('span:not(:first-child):last-child')
                  .dataset.text;
              this.qtyPricePairs.push([qty, price]);
            }),
          this.qtyPricePairs.reverse();
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/6/assets/price-per-item.js.map?v=20223165687617204711700898871
