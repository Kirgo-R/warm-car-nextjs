'use client'
export default function OverviewProductModal() {
  // const { productOverview, overviewIsOpened } =
  //   useAppSelector(state => state.product)
  // const dispatch = useAppDispatch()
  //
  // useEffect(() => {
  //   const closeByEsc = (evt: KeyboardEvent) => {
  //     if (evt.key === 'Escape') {
  //       dispatch(closeOverview())
  //     }
  //   }
  //   if (productOverview) {
  //     document.addEventListener('keydown', closeByEsc)
  //     return () => {
  //       document.removeEventListener('keydown', closeByEsc)
  //     }
  //   }
  // }, [productOverview])
  //
  // const handleClose = () => {
  //   dispatch(closeOverview())
  // }

  return (
    <div>
      {/*  className={clsx(styles.popup, {*/}
      {/*    [styles['popup_opened']]: productOverview*/}
      {/*  })}*/}
      {/*  onClick={handleClose}*/}
      {/*>*/}
      {/*  <section*/}
      {/*    className={styles.wrapper}*/}
      {/*    onClick={e => e.stopPropagation()}*/}
      {/*  >*/}
      {/*    {productOverview && (*/}
      {/*      <Image*/}
      {/*        src={`${productOverview.image}`}*/}
      {/*        alt={`${productOverview.alternativeText}`}*/}
      {/*        style={{*/}
      {/*          maxWidth: '100%',*/}
      {/*          height: '100%',*/}
      {/*          objectFit: 'cover',*/}
      {/*          gridColumn: '1/2',*/}
      {/*          gridRow: '1/4',*/}
      {/*          borderRadius: '3px'*/}
      {/*        }}*/}
      {/*        width={600}*/}
      {/*        height={600}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*    <div className={styles.info}>*/}
      {/*      <h2 className={styles.title}>*/}
      {/*        {productOverview !== null*/}
      {/*          ? `Утеплитель радиатора для автомобиля ${productOverview.productName}`*/}
      {/*          : ''}*/}
      {/*      </h2>*/}
      {/*      <span className={styles.price}>*/}
      {/*        {productOverview !== null*/}
      {/*          ? `Розничная цена ${productOverview.price} руб.`*/}
      {/*          : ''}*/}
      {/*      </span>*/}
      {/*      <Link*/}
      {/*        className={styles['wholesale-price']}*/}
      {/*        href={'/wholesalers'}*/}
      {/*        onClick={handleClose}*/}
      {/*      >*/}
      {/*        Кликните здесь чтобы узнать оптовую цену*/}
      {/*      </Link>*/}
      {/*      <div className={styles.cart}>*/}
      {/*        <button*/}
      {/*          className={`${tildaFont.className} ${styles['cart-button']}`}*/}
      {/*        >*/}
      {/*          Добавить в корзину*/}
      {/*        </button>*/}
      {/*        <span className={styles['cart-counter']}>*/}
      {/*          {productOverview !== null*/}
      {/*            ? `В корзине ${productOverview.quantity} шт.`*/}
      {/*            : ''}*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </section>*/}
    </div>
  )
}
