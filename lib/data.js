export const homepageData = {
  products: [
    {
      name: 'Black Beanie',
      path: '/next-js-enamel-mug/',
      brand: null,
      description:
        "\u003cp\u003eThe Next.js beanie has arrived! This embroidered beauty has a snug fit that ensures you're going to feel cozy and warm whatever you're doing.\u003c/p\u003e\n\u003cp\u003e\u0026bull; 60% cotton, 40% acrylic\u003cbr /\u003e\u0026bull; Breathable cotton blend\u003cbr /\u003e\u0026bull; Form-fitting shape\u003cbr /\u003e\u0026bull; One size fits most\u003c/p\u003e",
      prices: { price: { value: 80, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
      images: [
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/489/Hat-front-black__72990.1603748583.png',
          alt: '',
          isDefault: true,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/490/Hat-back-black__57260.1602591509.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/494/Hat-left-black__51142.1602591510.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/491/Hat-front-white__31525.1602591510.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/492/Hat-left-white__29807.1602591510.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/493/Hat-back-white__92043.1603748583.png',
          alt: '',
          isDefault: false,
        },
      ],
      variants: [{ id: 127, options: [], defaultImage: null }],
      productOptions: { edges: [] },
      id: '115',
      options: [],
      slug: 'next-js-enamel-mug',
      price: { value: 80, currencyCode: 'USD' },
    },
    {
      name: 'Lightweight Jacket',
      path: '/lightweight-jacket',
      brand: 37,
      description:
        '\u003cp\u003eAdd a little zing to your winter wardrobe with this vibrant Winter-breaker Jacket. With a brushed fleece inside, and a relaxed unisex fit, this jacket is just the stuff of the dreams, so be quick to grab yourself one!\u003cbr /\u003e\u003cbr /\u003e\u003cspan\u003eLong sleeve ripstop jacket colorblocked in black. Rough pattern in obsidian black and brown printed throughout. Printed graphic in white throughout. Logo-woven webbing trim in white and black throughout. Bungee-style drawstring at hood featuring rubberized logo hardware. Zip closure at front. Rubberized logo appliqu\u0026eacute; at chest. Welt pockets and textile logo patch in orange at waist. Elasticized cuffs. Partially lined. Black hardware.\u003c/span\u003e\u003c/p\u003e',
      prices: { price: { value: 249.99, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
      images: [
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/512/Men-Jacket-Front-Black__15466.1603283963.png',
          alt: '',
          isDefault: true,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/510/Men-Jacket-Side-Black__68202.1603283961.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/513/Men-Jacket-Back-Black__33864.1603283963.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/515/Men-Jacket-Front-White__95300.1603283963.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/511/Men-Jacket-Side-White__91924.1603283962.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/514/Men-Jacket-Back-White__02866.1603283963.png',
          alt: '',
          isDefault: false,
        },
      ],
      variants: [
        { id: 395, options: [], defaultImage: null },
        { id: 396, options: [], defaultImage: null },
        { id: 397, options: [], defaultImage: null },
        { id: 398, options: [], defaultImage: null },
        { id: 399, options: [], defaultImage: null },
        { id: 400, options: [], defaultImage: null },
      ],
      productOptions: {
        edges: [
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 150,
              displayName: 'Color',
              values: {
                edges: [
                  { node: { label: 'Black', isDefault: true, hexColors: ['#000000'] } },
                  { node: { label: 'White', isDefault: false, hexColors: ['#FFFFFF'] } },
                ],
              },
            },
          },
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 151,
              displayName: 'Size',
              values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
            },
          },
        ],
      },
      id: '116',
      options: [
        {
          id: 150,
          values: [
            { label: 'Black', isDefault: true, hexColors: ['#000000'] },
            { label: 'White', isDefault: false, hexColors: ['#FFFFFF'] },
          ],
          __typename: 'MultipleChoiceOption',
          displayName: 'Color',
        },
        {
          id: 151,
          values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
          __typename: 'MultipleChoiceOption',
          displayName: 'Size',
        },
      ],
      slug: 'lightweight-jacket',
      price: { value: 249.99, currencyCode: 'USD' },
    },
    {
      name: 'T-Shirt',
      path: '/jacket/',
      brand: 37,
      description:
        "\u003cp\u003eThis t-shirt is a must-have in your wardrobe, combining the timeless fit of a classic tee with an intricate embroidered detail that brings the shirt to a whole new level. It's soft and durable, so be prepared to have a new favorite t-shirt!\u003cbr /\u003e\u003cbr /\u003e\u003c/p\u003e",
      prices: { price: { value: 160.12, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
      images: [
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/534/Men-TShirt-Black-Front__70046.1603748348.png',
          alt: '',
          isDefault: true,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/531/Men-TShirt-Black-Left-Side__72119.1603284781.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/535/Men-TShirt-Black-Back__57266.1603748348.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/532/Men-TShirt-White-Front__99616.1603284781.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/530/Men-TShirt-White-Left-Side__69000.1603284781.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/533/Men-TShirt-White-Back__33450.1603284781.png',
          alt: '',
          isDefault: false,
        },
      ],
      variants: [
        { id: 381, options: [], defaultImage: null },
        { id: 382, options: [], defaultImage: null },
        { id: 383, options: [], defaultImage: null },
        { id: 384, options: [], defaultImage: null },
        { id: 385, options: [], defaultImage: null },
        { id: 386, options: [], defaultImage: null },
        { id: 387, options: [], defaultImage: null },
        { id: 388, options: [], defaultImage: null },
        { id: 389, options: [], defaultImage: null },
        { id: 390, options: [], defaultImage: null },
        { id: 391, options: [], defaultImage: null },
        { id: 392, options: [], defaultImage: null },
      ],
      productOptions: {
        edges: [
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 148,
              displayName: 'color',
              values: {
                edges: [
                  { node: { label: 'Black', isDefault: false, hexColors: ['#FFFFFF'] } },
                  { node: { label: 'White', isDefault: false, hexColors: ['#000000'] } },
                ],
              },
            },
          },
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 149,
              displayName: 'size',
              values: {
                edges: [
                  { node: { label: 'XS' } },
                  { node: { label: 'S' } },
                  { node: { label: 'M' } },
                  { node: { label: 'L' } },
                  { node: { label: 'XL' } },
                  { node: { label: 'XXL' } },
                ],
              },
            },
          },
        ],
      },
      id: '117',
      options: [
        {
          id: 148,
          values: [
            { label: 'Black', isDefault: false, hexColors: ['#FFFFFF'] },
            { label: 'White', isDefault: false, hexColors: ['#000000'] },
          ],
          __typename: 'MultipleChoiceOption',
          displayName: 'color',
        },
        {
          id: 149,
          values: [{ label: 'XS' }, { label: 'S' }, { label: 'M' }, { label: 'L' }, { label: 'XL' }, { label: 'XXL' }],
          __typename: 'MultipleChoiceOption',
          displayName: 'size',
        },
      ],
      slug: 'jacket',
      price: { value: 160.12, currencyCode: 'USD' },
    },
    {
      name: 'Mask',
      path: '/mask/',
      brand: 37,
      description:
        "\u003cp\u003eThis durable face mask is made from two layers of treated fabric and features elastic ear loops and a center flat seam that ensure a close fit. It's machine-washable and reusable. Sold in packs of 3.\u003c/p\u003e",
      prices: { price: { value: 39, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
      images: [
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/118/508/Surgical-Mask-Black__89554.1603756821.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/118/509/Surgical-Mask-Front-Black__75855.1603756822.png',
          alt: '',
          isDefault: true,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/118/507/Surgical_Mask_black.G01__86690.1602592629.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/118/506/Surgical-Mask-White__79146.1602592628.png',
          alt: '',
          isDefault: false,
        },
      ],
      variants: [
        { id: 455, options: [], defaultImage: null },
        { id: 456, options: [], defaultImage: null },
      ],
      productOptions: {
        edges: [
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 160,
              displayName: 'color',
              values: {
                edges: [
                  { node: { label: 'Black', isDefault: false, hexColors: ['#FFFFFF'] } },
                  { node: { label: 'White', isDefault: false, hexColors: ['#000000'] } },
                ],
              },
            },
          },
        ],
      },
      id: '118',
      options: [
        {
          id: 160,
          values: [
            { label: 'Black', isDefault: false, hexColors: ['#FFFFFF'] },
            { label: 'White', isDefault: false, hexColors: ['#000000'] },
          ],
          __typename: 'MultipleChoiceOption',
          displayName: 'color',
        },
      ],
      slug: 'mask',
      price: { value: 39, currencyCode: 'USD' },
    },
    {
      name: 'Short sleeve t-shirt',
      path: '/ladies-short-sleeve-t-shirt/',
      brand: null,
      description:
        '\u003cp\u003eA super-soft, form-fitting, breathable t-shirt with a slightly lower neckline than a classic t-shirt.\u003c/p\u003e\n\u003cp\u003e\u0026bull; Tri-blend construction (50% polyester/25% cotton/25% rayon)\u003cbr /\u003e\u0026bull; Pre-shrunk fabric\u003cbr /\u003e\u0026bull; 40 singles thread weight\u003cbr /\u003e\u0026bull; Ribbed crew neck with set-in sleeves\u003cbr /\u003e\u0026bull; Form fitting\u003c/p\u003e\n\u003cdiv class="table-responsive dynamic" data-unit-system="imperial"\u003e\u0026nbsp;\u003c/div\u003e',
      prices: { price: { value: 25, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
      images: [
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/119/398/mockup-31b14bb5__19161.1603748166.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/119/399/mockup-c83ee0d3__79960.1601012457.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/119/400/mockup-7e303c9b__44172.1601012458.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/119/401/mockup-2b1dac14__24899.1603748166.png',
          alt: '',
          isDefault: true,
        },
      ],
      variants: [
        {
          id: 138,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/54_source_1601012439.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 139,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/55_source_1601012439.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 140,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/56_source_1601012440.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 143,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/59_source_1601012442.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 144,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/60_source_1601012443.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 145,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/61_source_1601012444.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 148,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/64_source_1601012446.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 149,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/65_source_1601012446.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 150,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/66_source_1601012447.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 153,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/69_source_1601012449.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 154,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/70_source_1601012450.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 155,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/71_source_1601012450.png',
            altText: '',
            isDefault: true,
          },
        },
      ],
      productOptions: {
        edges: [
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 119,
              displayName: 'Color',
              values: {
                edges: [
                  { node: { label: 'Grey Triblend', isDefault: false, hexColors: ['#C1A7A7'] } },
                  { node: { label: 'Oatmeal Triblend', isDefault: false, hexColors: ['#F7CF95'] } },
                  { node: { label: 'Orange Triblend', isDefault: false, hexColors: ['#FCCD4D'] } },
                  { node: { label: 'Aqua Triblend', isDefault: true, hexColors: ['#00EAFF'] } },
                ],
              },
            },
          },
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 120,
              displayName: 'Size',
              values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
            },
          },
        ],
      },
      id: '119',
      options: [
        {
          id: 119,
          values: [
            { label: 'Grey Triblend', isDefault: false, hexColors: ['#C1A7A7'] },
            { label: 'Oatmeal Triblend', isDefault: false, hexColors: ['#F7CF95'] },
            { label: 'Orange Triblend', isDefault: false, hexColors: ['#FCCD4D'] },
            { label: 'Aqua Triblend', isDefault: true, hexColors: ['#00EAFF'] },
          ],
          __typename: 'MultipleChoiceOption',
          displayName: 'Color',
        },
        {
          id: 120,
          values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
          __typename: 'MultipleChoiceOption',
          displayName: 'Size',
        },
      ],
      slug: 'ladies-short-sleeve-t-shirt',
      price: { value: 25, currencyCode: 'USD' },
    },
    {
      name: 'Short t-shirt',
      path: '/short-sleeve-t-shirt/',
      brand: null,
      description:
        '\u003cp\u003eThe tri-blend fabric creates a vintage, fitted look. And extreme durability makes this t-shirt withstand repeated washings and still remain super comfortable. \u0026bull; Tri-blend construction (50% polyester/25% combed ring-spun cotton/25% rayon) \u0026bull; Pre-shrunk fabric \u0026bull; 40 singles thread weight \u0026bull; Comfortable and durable \u0026bull; Contemporary fit \u0026bull; Lightweight\u003c/p\u003e\n\u003cdiv class="table-responsive dynamic" data-unit-system="imperial"\u003e\u0026nbsp;\u003c/div\u003e',
      prices: { price: { value: 26, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
      images: [
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/120/402/mockup-521d0b16__86945.1603748107.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/120/403/mockup-8e0b6c8a__57476.1601012637.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/120/404/mockup-0f98d04e__74522.1601012637.png',
          alt: '',
          isDefault: false,
        },
        {
          url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/120/405/mockup-8ffbef51__62574.1603748107.png',
          alt: '',
          isDefault: true,
        },
      ],
      variants: [
        {
          id: 160,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/75_source_1601012613.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 161,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/76_source_1601012613.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 162,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/77_source_1601012614.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 168,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/83_source_1601012618.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 169,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/84_source_1601012619.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 170,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/85_source_1601012619.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 175,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/90_source_1601012622.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 176,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/91_source_1601012623.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 177,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/92_source_1601012623.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 182,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/97_source_1601012627.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 183,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/98_source_1601012627.png',
            altText: '',
            isDefault: true,
          },
        },
        {
          id: 184,
          options: [],
          defaultImage: {
            urlOriginal:
              'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/99_source_1601012628.png',
            altText: '',
            isDefault: true,
          },
        },
      ],
      productOptions: {
        edges: [
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 121,
              displayName: 'Color',
              values: {
                edges: [
                  { node: { label: 'Grey Triblend', isDefault: false, hexColors: ['#D0D0D0'] } },
                  { node: { label: 'Oatmeal Triblend', isDefault: false, hexColors: ['#F0EBD7'] } },
                  { node: { label: 'White Fleck Triblend', isDefault: false, hexColors: ['#E6DFDF'] } },
                  { node: { label: 'Aqua Triblend', isDefault: false, hexColors: ['#70EBE9'] } },
                ],
              },
            },
          },
          {
            node: {
              __typename: 'MultipleChoiceOption',
              entityId: 122,
              displayName: 'Size',
              values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
            },
          },
        ],
      },
      id: '120',
      options: [
        {
          id: 121,
          values: [
            { label: 'Grey Triblend', isDefault: false, hexColors: ['#D0D0D0'] },
            { label: 'Oatmeal Triblend', isDefault: false, hexColors: ['#F0EBD7'] },
            { label: 'White Fleck Triblend', isDefault: false, hexColors: ['#E6DFDF'] },
            { label: 'Aqua Triblend', isDefault: false, hexColors: ['#70EBE9'] },
          ],
          __typename: 'MultipleChoiceOption',
          displayName: 'Color',
        },
        {
          id: 122,
          values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
          __typename: 'MultipleChoiceOption',
          displayName: 'Size',
        },
      ],
      slug: 'short-sleeve-t-shirt',
      price: { value: 26, currencyCode: 'USD' },
    },
  ],
  categories: [
    { id: '24', name: 'Apparel', slug: 'apparel', path: '/apparel/' },
    { id: '23', name: 'Shop All', slug: 'shop-all', path: '/shop-all/' },
  ],
  brands: [
    {
      cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
      node: {
        entityId: 35,
        name: 'Sagaform',
        defaultImage: null,
        pageTitle: '',
        metaDesc: '',
        metaKeywords: [],
        searchKeywords: [],
        path: '/brands/sagaform/',
      },
    },
    {
      cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
      node: {
        entityId: 36,
        name: 'OFS',
        defaultImage: null,
        pageTitle: '',
        metaDesc: '',
        metaKeywords: [],
        searchKeywords: [],
        path: '/brands/ofs/',
      },
    },
    {
      cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
      node: {
        entityId: 37,
        name: 'ACME',
        defaultImage: null,
        pageTitle: '',
        metaDesc: '',
        metaKeywords: [],
        searchKeywords: [],
        path: '/brands/acme',
      },
    },
  ],
  pages: [
    {
      id: 2,
      channel_id: 1,
      name: 'Shipping \u0026 Returns',
      meta_title: '',
      is_visible: true,
      parent_id: 0,
      sort_order: 2,
      meta_keywords: '',
      type: 'page',
      meta_description: '',
      is_homepage: false,
      is_customers_only: false,
      search_keywords: '',
      url: '/en-US/shipping-returns/',
    },
    {
      id: 5,
      channel_id: 1,
      name: 'Privacy Policy',
      meta_title: '',
      is_visible: true,
      parent_id: 0,
      sort_order: 3,
      meta_keywords: '',
      type: 'page',
      meta_description: '',
      is_homepage: false,
      is_customers_only: false,
      search_keywords: '',
      url: '/en-US/privacy-policy/',
    },
    {
      id: 6,
      channel_id: 1,
      name: 'About',
      meta_title: '',
      is_visible: true,
      parent_id: 0,
      sort_order: 0,
      meta_keywords: '',
      type: 'page',
      meta_description: '',
      is_homepage: false,
      is_customers_only: false,
      search_keywords: '',
      url: '/en-US/about/',
    },
    {
      id: 7,
      channel_id: 1,
      name: 'Terms of use',
      meta_title: '',
      is_visible: true,
      parent_id: 0,
      sort_order: 1,
      meta_keywords: '',
      type: 'page',
      meta_description: '',
      is_homepage: false,
      is_customers_only: false,
      search_keywords: '',
      url: '/en-US/terms-of-use/',
    },
    {
      id: 8,
      channel_id: 1,
      name: 'Sobre Nosotros',
      meta_title: '',
      is_visible: true,
      parent_id: 0,
      sort_order: 0,
      meta_keywords: '',
      type: 'page',
      meta_description: '',
      is_homepage: false,
      is_customers_only: false,
      search_keywords: '',
      url: '/es/about/',
    },
    {
      id: 9,
      channel_id: 1,
      name: 'Términos de Uso',
      meta_title: '',
      is_visible: true,
      parent_id: 0,
      sort_order: 1,
      meta_keywords: '',
      type: 'page',
      meta_description: '',
      is_homepage: false,
      is_customers_only: false,
      search_keywords: '',
      url: '/es/terms-of-use/',
    },
    {
      id: 10,
      channel_id: 1,
      name: 'Envíos y Devoluciones',
      meta_title: '',
      is_visible: true,
      parent_id: 0,
      sort_order: 2,
      meta_keywords: '',
      type: 'page',
      meta_description: '',
      is_homepage: false,
      is_customers_only: false,
      search_keywords: '',
      url: '/es/shipping-returns/',
    },
    {
      id: 11,
      channel_id: 1,
      name: 'Política de privacidad',
      meta_title: '',
      is_visible: true,
      parent_id: 0,
      sort_order: 3,
      meta_keywords: '',
      type: 'page',
      meta_description: '',
      is_homepage: false,
      is_customers_only: false,
      search_keywords: '',
      url: '/es/privacy-policy/',
    },
  ],
}

export const searchAllData = {
  data: {
    products: [
      {
        name: 'Black Beanie',
        path: '/next-js-enamel-mug/',
        brand: null,
        description:
          "<p>The Next.js beanie has arrived! This embroidered beauty has a snug fit that ensures you're going to feel cozy and warm whatever you're doing.</p><br /><p>&bull; 60% cotton, 40% acrylic<br />&bull; Breathable cotton blend<br />&bull; Form-fitting shape<br />&bull; One size fits most</p>",
        prices: { price: { value: 80, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/489/Hat-front-black__72990.1603748583.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/490/Hat-back-black__57260.1602591509.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/494/Hat-left-black__51142.1602591510.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/491/Hat-front-white__31525.1602591510.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/492/Hat-left-white__29807.1602591510.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/115/493/Hat-back-white__92043.1603748583.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [{ id: 127, options: [], defaultImage: null }],
        productOptions: { edges: [] },
        id: '115',
        options: [],
        slug: 'next-js-enamel-mug',
        price: { value: 80, currencyCode: 'USD' },
      },
      {
        name: 'Lightweight Jacket',
        path: '/lightweight-jacket',
        brand: 37,
        description:
          '<p>Add a little zing to your winter wardrobe with this vibrant Winter-breaker Jacket. With a brushed fleece inside, and a relaxed unisex fit, this jacket is just the stuff of the dreams, so be quick to grab yourself one!<br /><br /><span>Long sleeve ripstop jacket colorblocked in black. Rough pattern in obsidian black and brown printed throughout. Printed graphic in white throughout. Logo-woven webbing trim in white and black throughout. Bungee-style drawstring at hood featuring rubberized logo hardware. Zip closure at front. Rubberized logo appliqu&eacute; at chest. Welt pockets and textile logo patch in orange at waist. Elasticized cuffs. Partially lined. Black hardware.</span></p>',
        prices: { price: { value: 249.99, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/512/Men-Jacket-Front-Black__15466.1603283963.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/510/Men-Jacket-Side-Black__68202.1603283961.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/513/Men-Jacket-Back-Black__33864.1603283963.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/515/Men-Jacket-Front-White__95300.1603283963.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/511/Men-Jacket-Side-White__91924.1603283962.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/116/514/Men-Jacket-Back-White__02866.1603283963.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [
          { id: 395, options: [], defaultImage: null },
          { id: 396, options: [], defaultImage: null },
          { id: 397, options: [], defaultImage: null },
          { id: 398, options: [], defaultImage: null },
          { id: 399, options: [], defaultImage: null },
          { id: 400, options: [], defaultImage: null },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 150,
                displayName: 'Color',
                values: {
                  edges: [
                    { node: { label: 'Black', isDefault: true, hexColors: ['#000000'] } },
                    { node: { label: 'White', isDefault: false, hexColors: ['#FFFFFF'] } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 151,
                displayName: 'Size',
                values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
              },
            },
          ],
        },
        id: '116',
        options: [
          {
            id: 150,
            values: [
              { label: 'Black', isDefault: true, hexColors: ['#000000'] },
              { label: 'White', isDefault: false, hexColors: ['#FFFFFF'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
          {
            id: 151,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
        ],
        slug: 'lightweight-jacket',
        price: { value: 249.99, currencyCode: 'USD' },
      },
      {
        name: 'T-Shirt',
        path: '/jacket/',
        brand: 37,
        description:
          "<p>This t-shirt is a must-have in your wardrobe, combining the timeless fit of a classic tee with an intricate embroidered detail that brings the shirt to a whole new level. It's soft and durable, so be prepared to have a new favorite t-shirt!<br /><br /></p>",
        prices: { price: { value: 160.12, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/534/Men-TShirt-Black-Front__70046.1603748348.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/531/Men-TShirt-Black-Left-Side__72119.1603284781.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/535/Men-TShirt-Black-Back__57266.1603748348.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/532/Men-TShirt-White-Front__99616.1603284781.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/530/Men-TShirt-White-Left-Side__69000.1603284781.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/117/533/Men-TShirt-White-Back__33450.1603284781.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [
          { id: 381, options: [], defaultImage: null },
          { id: 382, options: [], defaultImage: null },
          { id: 383, options: [], defaultImage: null },
          { id: 384, options: [], defaultImage: null },
          { id: 385, options: [], defaultImage: null },
          { id: 386, options: [], defaultImage: null },
          { id: 387, options: [], defaultImage: null },
          { id: 388, options: [], defaultImage: null },
          { id: 389, options: [], defaultImage: null },
          { id: 390, options: [], defaultImage: null },
          { id: 391, options: [], defaultImage: null },
          { id: 392, options: [], defaultImage: null },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 148,
                displayName: 'color',
                values: {
                  edges: [
                    { node: { label: 'Black', isDefault: false, hexColors: ['#FFFFFF'] } },
                    { node: { label: 'White', isDefault: false, hexColors: ['#000000'] } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 149,
                displayName: 'size',
                values: {
                  edges: [
                    { node: { label: 'XS' } },
                    { node: { label: 'S' } },
                    { node: { label: 'M' } },
                    { node: { label: 'L' } },
                    { node: { label: 'XL' } },
                    { node: { label: 'XXL' } },
                  ],
                },
              },
            },
          ],
        },
        id: '117',
        options: [
          {
            id: 148,
            values: [
              { label: 'Black', isDefault: false, hexColors: ['#FFFFFF'] },
              { label: 'White', isDefault: false, hexColors: ['#000000'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'color',
          },
          {
            id: 149,
            values: [{ label: 'XS' }, { label: 'S' }, { label: 'M' }, { label: 'L' }, { label: 'XL' }, { label: 'XXL' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'size',
          },
        ],
        slug: 'jacket',
        price: { value: 160.12, currencyCode: 'USD' },
      },
      {
        name: 'Mask',
        path: '/mask/',
        brand: 37,
        description:
          "<p>This durable face mask is made from two layers of treated fabric and features elastic ear loops and a center flat seam that ensure a close fit. It's machine-washable and reusable. Sold in packs of 3.</p>",
        prices: { price: { value: 39, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/118/508/Surgical-Mask-Black__89554.1603756821.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/118/509/Surgical-Mask-Front-Black__75855.1603756822.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/118/507/Surgical_Mask_black.G01__86690.1602592629.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/118/506/Surgical-Mask-White__79146.1602592628.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [
          { id: 455, options: [], defaultImage: null },
          { id: 456, options: [], defaultImage: null },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 160,
                displayName: 'color',
                values: {
                  edges: [
                    { node: { label: 'Black', isDefault: false, hexColors: ['#FFFFFF'] } },
                    { node: { label: 'White', isDefault: false, hexColors: ['#000000'] } },
                  ],
                },
              },
            },
          ],
        },
        id: '118',
        options: [
          {
            id: 160,
            values: [
              { label: 'Black', isDefault: false, hexColors: ['#FFFFFF'] },
              { label: 'White', isDefault: false, hexColors: ['#000000'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'color',
          },
        ],
        slug: 'mask',
        price: { value: 39, currencyCode: 'USD' },
      },
      {
        name: 'Short sleeve t-shirt',
        path: '/ladies-short-sleeve-t-shirt/',
        brand: null,
        description:
          '<p>A super-soft, form-fitting, breathable t-shirt with a slightly lower neckline than a classic t-shirt.</p>\n<p>&bull; Tri-blend construction (50% polyester/25% cotton/25% rayon)<br />&bull; Pre-shrunk fabric<br />&bull; 40 singles thread weight<br />&bull; Ribbed crew neck with set-in sleeves<br />&bull; Form fitting</p>\n<div class="table-responsive dynamic" data-unit-system="imperial">&nbsp;</div>',
        prices: { price: { value: 25, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/119/398/mockup-31b14bb5__19161.1603748166.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/119/399/mockup-c83ee0d3__79960.1601012457.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/119/400/mockup-7e303c9b__44172.1601012458.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/119/401/mockup-2b1dac14__24899.1603748166.png',
            alt: '',
            isDefault: true,
          },
        ],
        variants: [
          {
            id: 138,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/54_source_1601012439.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 139,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/55_source_1601012439.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 140,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/56_source_1601012440.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 143,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/59_source_1601012442.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 144,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/60_source_1601012443.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 145,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/61_source_1601012444.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 148,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/64_source_1601012446.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 149,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/65_source_1601012446.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 150,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/66_source_1601012447.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 153,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/69_source_1601012449.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 154,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/70_source_1601012450.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 155,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/71_source_1601012450.png',
              altText: '',
              isDefault: true,
            },
          },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 119,
                displayName: 'Color',
                values: {
                  edges: [
                    { node: { label: 'Grey Triblend', isDefault: false, hexColors: ['#C1A7A7'] } },
                    { node: { label: 'Oatmeal Triblend', isDefault: false, hexColors: ['#F7CF95'] } },
                    { node: { label: 'Orange Triblend', isDefault: false, hexColors: ['#FCCD4D'] } },
                    { node: { label: 'Aqua Triblend', isDefault: true, hexColors: ['#00EAFF'] } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 120,
                displayName: 'Size',
                values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
              },
            },
          ],
        },
        id: '119',
        options: [
          {
            id: 119,
            values: [
              { label: 'Grey Triblend', isDefault: false, hexColors: ['#C1A7A7'] },
              { label: 'Oatmeal Triblend', isDefault: false, hexColors: ['#F7CF95'] },
              { label: 'Orange Triblend', isDefault: false, hexColors: ['#FCCD4D'] },
              { label: 'Aqua Triblend', isDefault: true, hexColors: ['#00EAFF'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
          {
            id: 120,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
        ],
        slug: 'ladies-short-sleeve-t-shirt',
        price: { value: 25, currencyCode: 'USD' },
      },
      {
        name: 'Short t-shirt',
        path: '/short-sleeve-t-shirt/',
        brand: null,
        description:
          '<p>The tri-blend fabric creates a vintage, fitted look. And extreme durability makes this t-shirt withstand repeated washings and still remain super comfortable. &bull; Tri-blend construction (50% polyester/25% combed ring-spun cotton/25% rayon) &bull; Pre-shrunk fabric &bull; 40 singles thread weight &bull; Comfortable and durable &bull; Contemporary fit &bull; Lightweight</p>\n<div class="table-responsive dynamic" data-unit-system="imperial">&nbsp;</div>',
        prices: { price: { value: 26, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/120/402/mockup-521d0b16__86945.1603748107.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/120/403/mockup-8e0b6c8a__57476.1601012637.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/120/404/mockup-0f98d04e__74522.1601012637.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/120/405/mockup-8ffbef51__62574.1603748107.png',
            alt: '',
            isDefault: true,
          },
        ],
        variants: [
          {
            id: 160,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/75_source_1601012613.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 161,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/76_source_1601012613.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 162,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/77_source_1601012614.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 168,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/83_source_1601012618.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 169,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/84_source_1601012619.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 170,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/85_source_1601012619.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 175,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/90_source_1601012622.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 176,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/91_source_1601012623.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 177,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/92_source_1601012623.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 182,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/97_source_1601012627.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 183,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/98_source_1601012627.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 184,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/99_source_1601012628.png',
              altText: '',
              isDefault: true,
            },
          },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 121,
                displayName: 'Color',
                values: {
                  edges: [
                    { node: { label: 'Grey Triblend', isDefault: false, hexColors: ['#D0D0D0'] } },
                    { node: { label: 'Oatmeal Triblend', isDefault: false, hexColors: ['#F0EBD7'] } },
                    { node: { label: 'White Fleck Triblend', isDefault: false, hexColors: ['#E6DFDF'] } },
                    { node: { label: 'Aqua Triblend', isDefault: false, hexColors: ['#70EBE9'] } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 122,
                displayName: 'Size',
                values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
              },
            },
          ],
        },
        id: '120',
        options: [
          {
            id: 121,
            values: [
              { label: 'Grey Triblend', isDefault: false, hexColors: ['#D0D0D0'] },
              { label: 'Oatmeal Triblend', isDefault: false, hexColors: ['#F0EBD7'] },
              { label: 'White Fleck Triblend', isDefault: false, hexColors: ['#E6DFDF'] },
              { label: 'Aqua Triblend', isDefault: false, hexColors: ['#70EBE9'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
          {
            id: 122,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
        ],
        slug: 'short-sleeve-t-shirt',
        price: { value: 26, currencyCode: 'USD' },
      },
      {
        name: 'Short-Sleeve T-Shirt',
        path: '/next-js-short-sleeve-unisex-t-shirt/',
        brand: null,
        description:
          '<p>You\'ve now found the staple t-shirt of your wardrobe. It\'s made of a thicker, heavier cotton, but it\'s still soft and comfy. And the double stitching on the neckline and sleeves add more durability to what is sure to be a favorite! &bull; 100% ring-spun cotton &bull; Sport Grey is 90% ring-spun cotton, 10% polyester &bull; Dark Heather is 65% polyester, 35% cotton &bull; 4.5 oz/y&sup2; (153 g/m&sup2;) &bull; Pre-shrunk &bull; Shoulder-to-shoulder taping &bull; Quarter-turned to avoid crease down the center</p>\n<div class="table-responsive dynamic" data-unit-system="imperial">&nbsp;</div>',
        prices: { price: { value: 13.5, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/121/406/mockup-a0dc2330__62146.1601012861.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/121/407/mockup-35654aa0__38532.1601012862.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/121/408/mockup-00446dbe__38739.1601012863.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [
          {
            id: 189,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/103_source_1601012851.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 190,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/104_source_1601012851.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 191,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/105_source_1601012852.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 195,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/109_source_1601012855.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 196,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/110_source_1601012856.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 197,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/111_source_1601012856.png',
              altText: '',
              isDefault: true,
            },
          },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 123,
                displayName: 'Color',
                values: {
                  edges: [
                    { node: { label: 'White', isDefault: false, hexColors: ['#FFF000'] } },
                    { node: { label: 'Sport Grey', isDefault: false, hexColors: ['#DAD3D3'] } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 124,
                displayName: 'Size',
                values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
              },
            },
          ],
        },
        id: '121',
        options: [
          {
            id: 123,
            values: [
              { label: 'White', isDefault: false, hexColors: ['#FFF000'] },
              { label: 'Sport Grey', isDefault: false, hexColors: ['#DAD3D3'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
          {
            id: 124,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
        ],
        slug: 'next-js-short-sleeve-unisex-t-shirt',
        price: { value: 13.5, currencyCode: 'USD' },
      },
      {
        name: 'Letterman Jacket',
        path: '/womens-letterman-jacket/',
        brand: null,
        description:
          '<p>Reward yourself, friends, and teammates for their hard work and determination&mdash;get a set of matching Letterman Jackets! This jacket sports a gently contoured silhouette and striped twill-taped neck, cuffs, and hem. It&rsquo;s also has a warm fleece lining, 2 spacious slash pockets, and contrasting white snap buttons closure in front. &bull; 65% ring-spun combed cotton, 35% polyester fleece &bull; Regular fit &bull; Fleece lining &bull; 2x2 rib-knit collar, cuffs, and hem &bull; Front closure with white snap buttons &bull; Twill-taped neck in matching color &bull; 2 matching fabric front slash pockets &bull; Blank product sourced from Indonesia</p>\n<div class="table-responsive dynamic" data-unit-system="imperial">&nbsp;</div>',
        prices: { price: { value: 54, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/122/412/mockup-008b81ff__29393.1603748041.jpg',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/122/413/mockup-ef7e6106__24046.1603748041.jpg',
            alt: '',
            isDefault: true,
          },
        ],
        variants: [
          { id: 418, options: [], defaultImage: null },
          { id: 419, options: [], defaultImage: null },
          { id: 420, options: [], defaultImage: null },
          { id: 421, options: [], defaultImage: null },
          { id: 422, options: [], defaultImage: null },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 125,
                displayName: 'Size',
                values: {
                  edges: [
                    { node: { label: 'S' } },
                    { node: { label: 'M' } },
                    { node: { label: 'L' } },
                    { node: { label: 'XL' } },
                    { node: { label: '2XL' } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 154,
                displayName: 'Color',
                values: { edges: [{ node: { label: 'Gray', isDefault: false, hexColors: ['#908989'] } }] },
              },
            },
          ],
        },
        id: '122',
        options: [
          {
            id: 125,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }, { label: 'XL' }, { label: '2XL' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
          {
            id: 154,
            values: [{ label: 'Gray', isDefault: false, hexColors: ['#908989'] }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
        ],
        slug: 'womens-letterman-jacket',
        price: { value: 54, currencyCode: 'USD' },
      },
      {
        name: 'Champion Packable Jacket',
        path: '/embroidered-champion-packable-jacket/',
        brand: 37,
        description:
          '<p>Protect yourself from the elements with this Champion packable jacket. This wind and rain resistant polyester jacket with a detailed embroidery design has a practical hood, front kangaroo pocket, and zipped pouch pocket which you can pull out and use to scrunch the jacket into for convenient storage. &bull; 100% polyester micro poplin &bull; Wind and rain resistant &bull; Half zip pullover with a hood &bull; Front kangaroo pocket &bull; Hidden zipped pouch pocket &bull; Packable in the zipped pouch pocket &bull; Adjustable bungee draw cord at hood and bottom hem &bull; Elastic cuffs &bull; Embroidered &ldquo;C&rdquo; logo on the left sleeve</p>\n<div class="table-responsive dynamic" data-unit-system="imperial">&nbsp;</div>',
        prices: { price: { value: 51.5, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/124/415/mockup-c2bbbaf4__00019.1601229493.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/124/416/mockup-9b9894f1__67347.1601229494.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/124/417/mockup-2b4bcb4e__84929.1601229495.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [
          {
            id: 216,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/127_source_1601229485.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 217,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/128_source_1601229486.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 218,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/129_source_1601229487.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 221,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/132_source_1601229488.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 222,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/133_source_1601229489.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 223,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/134_source_1601229490.png',
              altText: '',
              isDefault: true,
            },
          },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 127,
                displayName: 'Color',
                values: {
                  edges: [
                    { node: { label: 'Black', isDefault: false, hexColors: ['#0D0C0C'] } },
                    { node: { label: 'Navy', isDefault: false, hexColors: ['#271160'] } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 128,
                displayName: 'Size',
                values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
              },
            },
          ],
        },
        id: '124',
        options: [
          {
            id: 127,
            values: [
              { label: 'Black', isDefault: false, hexColors: ['#0D0C0C'] },
              { label: 'Navy', isDefault: false, hexColors: ['#271160'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
          {
            id: 128,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
        ],
        slug: 'embroidered-champion-packable-jacket',
        price: { value: 51.5, currencyCode: 'USD' },
      },
      {
        name: 'Bomber Jacket',
        path: '/bomber-jacket/',
        brand: null,
        description:
          '<p>Combining durability and style, this bomber jacket is a great addition to any wardrobe. It&rsquo;s a real statement piece that makes even the simplest outfit look fashionable.<br /><br />&bull; 60% cotton, 40% polyester fleece<br />&bull; 7.4 oz/yd&sup2; (250.9 g/m&sup2;)<br />&bull; Ribbed crew neck, waistband, and cuffs<br />&bull; Raglan sleeves <br />&bull; Slash pockets <br />&bull; YKK zipper</p>\n<div class="table-responsive dynamic" data-unit-system="imperial">&nbsp;</div>',
        prices: { price: { value: 52, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/125/420/mockup-7500e8eb__78586.1601229597.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/125/422/mockup-f9f4ca3c__03903.1601229599.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [
          {
            id: 227,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/137_source_1601229589.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 228,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/138_source_1601229589.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 229,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/139_source_1601229590.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 232,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/142_source_1601229592.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 233,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/143_source_1601229593.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 234,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/144_source_1601229593.png',
              altText: '',
              isDefault: true,
            },
          },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 129,
                displayName: 'Color',
                values: {
                  edges: [
                    { node: { label: 'Heather Black', isDefault: false, hexColors: ['#1A1818'] } },
                    { node: { label: 'Heather Military Green', isDefault: false, hexColors: ['#5C6D16'] } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 130,
                displayName: 'Size',
                values: { edges: [{ node: { label: 'S' } }, { node: { label: 'M' } }, { node: { label: 'L' } }] },
              },
            },
          ],
        },
        id: '125',
        options: [
          {
            id: 129,
            values: [
              { label: 'Heather Black', isDefault: false, hexColors: ['#1A1818'] },
              { label: 'Heather Military Green', isDefault: false, hexColors: ['#5C6D16'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
          {
            id: 130,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
        ],
        slug: 'bomber-jacket',
        price: { value: 52, currencyCode: 'USD' },
      },
      {
        name: 'Unisex Skinny Joggers',
        path: '/unisex-skinny-joggers/',
        brand: null,
        description:
          '<p>It looks like you found your next favorite workout sweatpants&mdash;the slim fit joggers are light and breathable, making them perfect for sports. Or if you feel like lounging on the couch, these soft joggers are just what you need. &bull; 65% polyester, 35% cotton &bull; Fabric weight: 250 g/m&sup2; (10.5 oz/y&sup2;) &bull; Elastic waistband with a self-colored flat cord &bull; Brushed metal eyelets for the cord &bull; Double layer ribbed ankle cuffs &bull; Side pockets with double layered ribbed hem &bull; Back patch pocket &bull; Slim fit (women may want to order a size down)</p>\n<p>&nbsp;</p>',
        prices: { price: { value: 44, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/126/423/mockup-9c5e3634__60853.1603747807.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/126/424/mockup-298fdaa3__84338.1601229769.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/126/425/mockup-ce086e5f__52042.1603747807.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/126/426/mockup-dbf9eb7b__11067.1601229771.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [
          {
            id: 238,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/147_source_1601229758.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 239,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/148_source_1601229759.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 240,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/149_source_1601229759.png',
              altText: '',
              isDefault: true,
            },
          },
          {
            id: 241,
            options: [],
            defaultImage: {
              urlOriginal:
                'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/attribute_rule_images/150_source_1601229760.png',
              altText: '',
              isDefault: true,
            },
          },
          { id: 413, options: [], defaultImage: null },
          { id: 414, options: [], defaultImage: null },
          { id: 415, options: [], defaultImage: null },
          { id: 416, options: [], defaultImage: null },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 131,
                displayName: 'Color',
                values: {
                  edges: [
                    { node: { label: 'Black', isDefault: false, hexColors: ['#0A0A0A'] } },
                    { node: { label: 'White', isDefault: false, hexColors: ['#F8F8F8'] } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 132,
                displayName: 'Size',
                values: {
                  edges: [
                    { node: { label: 'S' } },
                    { node: { label: 'M' } },
                    { node: { label: 'L' } },
                    { node: { label: 'XL' } },
                  ],
                },
              },
            },
          ],
        },
        id: '126',
        options: [
          {
            id: 131,
            values: [
              { label: 'Black', isDefault: false, hexColors: ['#0A0A0A'] },
              { label: 'White', isDefault: false, hexColors: ['#F8F8F8'] },
            ],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
          {
            id: 132,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }, { label: 'XL' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
        ],
        slug: 'unisex-skinny-joggers',
        price: { value: 44, currencyCode: 'USD' },
      },
      {
        name: 'Unisex Joggers',
        path: '/unisex-joggers/',
        brand: null,
        description:
          '<p>Get ready for that 10K run or take it slow in your backyard&mdash;these joggers are sure to make you feel comfortable either way. </p>\n<p>&bull; 60% cotton, 40% polyester pre-shrunk fleece<br />&bull; Fabric weight: 7.2 oz/yd&sup2; (244 g/m&sup2;)<br />&bull; 1x1 rib cuffs with spandex for stretch and recovery<br />&bull; Elastic waistband with external drawcord<br />&bull; Contrast drawcord and side pockets (all body colors include charcoal gray contrast detailing except black heather, which has black)<br />&bull; Lower rise on the front, longer rise on the backside<br />&bull; Pilling-resistant<br />&bull; Tapered leg</p>\n<div class="table-responsive dynamic" data-unit-system="imperial">&nbsp;</div>',
        prices: { price: { value: 34, currencyCode: 'USD' }, salePrice: null, retailPrice: null },
        images: [
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/127/431/mockup-9fc4c1cf__88683.1601229845.png',
            alt: '',
            isDefault: true,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/127/432/mockup-b3bfb20a__27807.1601229846.png',
            alt: '',
            isDefault: false,
          },
          {
            url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/original/products/127/433/mockup-1fce4854__16542.1601229847.png',
            alt: '',
            isDefault: false,
          },
        ],
        variants: [
          { id: 408, options: [], defaultImage: null },
          { id: 409, options: [], defaultImage: null },
          { id: 410, options: [], defaultImage: null },
          { id: 411, options: [], defaultImage: null },
          { id: 412, options: [], defaultImage: null },
        ],
        productOptions: {
          edges: [
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 133,
                displayName: 'Size',
                values: {
                  edges: [
                    { node: { label: 'S' } },
                    { node: { label: 'M' } },
                    { node: { label: 'L' } },
                    { node: { label: 'XL' } },
                    { node: { label: '2XL' } },
                  ],
                },
              },
            },
            {
              node: {
                __typename: 'MultipleChoiceOption',
                entityId: 153,
                displayName: 'Color',
                values: { edges: [{ node: { label: 'Gray', isDefault: false, hexColors: ['#E6E6E6'] } }] },
              },
            },
          ],
        },
        id: '127',
        options: [
          {
            id: 133,
            values: [{ label: 'S' }, { label: 'M' }, { label: 'L' }, { label: 'XL' }, { label: '2XL' }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Size',
          },
          {
            id: 153,
            values: [{ label: 'Gray', isDefault: false, hexColors: ['#E6E6E6'] }],
            __typename: 'MultipleChoiceOption',
            displayName: 'Color',
          },
        ],
        slug: 'unisex-joggers',
        price: { value: 34, currencyCode: 'USD' },
      },
    ],
    found: true,
  },
}
