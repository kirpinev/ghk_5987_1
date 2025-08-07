import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import hero from "./assets/hero.png";
import drums from "./assets/drums.png";
import bag from "./assets/bag.png";
import ruble from "./assets/ruble.png";
import sim from "./assets/sim.png";
import pocket from "./assets/pocket.png";
import check from "./assets/check.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { ThxLayout } from "./thx/ThxLayout.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Product {
  title: string;
  text: string;
  image: string;
}

const products: Array<Product> = [
  {
    title: "+1 категория с кэшбэком 5%",
    text: "В популярной категории",
    image: bag,
  },
  {
    title: "+1 спин в барабане",
    text: "Больше шансы на 100% кэшбэк",
    image: drums,
  },
  {
    title: "+2% годовых по накопительному счету",
    text: "На ежедневный остаток",
    image: ruble,
  },
  {
    title: "Бесплатная мобильная связь",
    text: "от Альфа Мобайл",
    image: sim,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "До 7 000 ₽ в месяц",
    image: pocket,
  },
];

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [totalSum, setTotalSum] = useState(399);
  const [type, setType] = useState("");

  const submit = () => {
    window.gtag("event", "5988_get_sub", {
      variant_name: "5987_1",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hero} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium">
            Первый месяц бесплатно, <br /> далее — 399 ₽ в месяц
          </Typography.Text>
          <Gap size={20} />
          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <img
                src={product.image}
                alt=""
                height={48}
                width={48}
                className={appSt.productIcon}
              />
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
            </div>
          ))}
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h2"
          weight="bold"
          view="small"
          className={appSt.productsTitle}
        >
          Дополнительные опции
        </Typography.TitleResponsive>
        <Typography.Text
          view="primary-medium"
          color="secondary"
          style={{ textAlign: "center" }}
        >
          Можно выбрать раз в месяц
        </Typography.Text>
        <Gap size={16} />
        <div>
          <Swiper
            style={{ marginLeft: "1px", marginRight: "1px" }}
            slidesPerView="auto"
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide
              style={{
                width: "300px",
                marginLeft: "16px",
              }}
            >
              <div
                className={appSt.slider}
                style={{
                  ...(type === "travel" && { backgroundColor: "#F4F5F3" }),
                }}
              >
                <div
                  className={appSt.sliderTop1}
                  style={{
                    backgroundColor: type === "travel" ? "white" : "#DEF9FF",
                  }}
                >
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    weight="bold"
                    defaultMargins={false}
                    style={{ fontWeight: "500" }}
                  >
                    Путешествия
                  </Typography.Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Дополнительный Travel-кэшбэк
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Страховка багажа
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Роуминг от Альфа-Мобайл
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Ранний доступ к скидкам на билеты
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                </div>
                <Gap size={16} />
                {type && type !== "travel" && (
                  <div style={{ textAlign: "center", marginTop: "auto" }}>
                    <div
                      onClick={() => {
                        setType("travel");
                        setTotalSum(599);
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "24px",
                        backgroundColor: "#F3F4F5",
                        textAlign: "center",
                        marginTop: "auto",
                      }}
                    >
                      Заменить
                    </div>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="secondary-large"
                      color="secondary"
                      defaultMargins={false}
                    >
                      Уже выбран другой набор
                    </Typography.Text>
                  </div>
                )}
                {type && type === "travel" && (
                  <div style={{ textAlign: "center" }}>
                    <div
                      onClick={() => {
                        setType("");
                        setTotalSum(399);
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "24px",
                        backgroundColor: "white",
                        textAlign: "center",
                      }}
                    >
                      Отменить
                    </div>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="secondary-large"
                      color="secondary"
                      defaultMargins={false}
                    >
                      Добавлено к подписке
                    </Typography.Text>
                  </div>
                )}
                {!type && (
                  <ButtonMobile
                    style={{ marginTop: "auto" }}
                    size="xl"
                    hint="Добавить к подписке"
                    onClick={() => {
                      setTotalSum((prevState) => prevState + 200);
                      setType("travel");
                    }}
                  >
                    + 200 ₽ в месяц
                  </ButtonMobile>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "300px",
                marginLeft: "16px",
              }}
            >
              <div
                className={appSt.slider}
                style={{
                  ...(type === "city" && { backgroundColor: "#F4F5F3" }),
                }}
              >
                <div
                  className={appSt.sliderTop2}
                  style={{
                    backgroundColor: "#FFDEDE",
                  }}
                >
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    weight="bold"
                    defaultMargins={false}
                    style={{ fontWeight: "500" }}
                  >
                    Твой город
                  </Typography.Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Кэшбэк на любимый вид транспорта
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Бесплатный кофе каждый месяц
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Чаевые без комиссии с сервисом НетМонет
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Бери заряд — первые 30 минут в подарок
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                </div>
                <Gap size={16} />
                {type && type !== "city" && (
                  <div style={{ textAlign: "center", marginTop: "auto" }}>
                    <div
                      onClick={() => {
                        setType("city");
                        setTotalSum(599);
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "24px",
                        backgroundColor: "#F3F4F5",
                        textAlign: "center",
                      }}
                    >
                      Заменить
                    </div>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="secondary-large"
                      color="secondary"
                      defaultMargins={false}
                    >
                      Уже выбран другой набор
                    </Typography.Text>
                  </div>
                )}
                {type && type === "city" && (
                  <div style={{ textAlign: "center" }}>
                    <div
                      onClick={() => {
                        setType("");
                        setTotalSum(399);
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "24px",
                        backgroundColor: "white",
                        textAlign: "center",
                      }}
                    >
                      Отменить
                    </div>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="secondary-large"
                      color="secondary"
                      defaultMargins={false}
                    >
                      Добавлено к подписке
                    </Typography.Text>
                  </div>
                )}
                {!type && (
                  <ButtonMobile
                    style={{ marginTop: "auto" }}
                    size="xl"
                    hint="Добавить к подписке"
                    onClick={() => {
                      setTotalSum((prevState) => prevState + 200);
                      setType("city");
                    }}
                  >
                    + 200 ₽ в месяц
                  </ButtonMobile>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "300px",
                marginLeft: "16px",
              }}
            >
              <div
                className={appSt.slider}
                style={{
                  ...(type === "zozh" && { backgroundColor: "#F4F5F3" }),
                }}
              >
                <div
                  className={appSt.sliderTop3}
                  style={{
                    backgroundColor: "#E3FFDE",
                  }}
                >
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    weight="bold"
                    defaultMargins={false}
                    style={{ fontWeight: "500" }}
                  >
                    ЗОЖ
                  </Typography.Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Кэшбэк на любимый вид транспорта
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Бесплатный кофе каждый месяц
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Чаевые без комиссии с сервисом НетМонет
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Бери заряд — первые 30 минут в подарок
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                </div>
                <Gap size={16} />
                {type && type !== "zozh" && (
                  <div style={{ textAlign: "center", marginTop: "auto" }}>
                    <div
                      onClick={() => {
                        setType("zozh");
                        setTotalSum(599);
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "24px",
                        backgroundColor: "#F3F4F5",
                        textAlign: "center",
                      }}
                    >
                      Заменить
                    </div>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="secondary-large"
                      color="secondary"
                      defaultMargins={false}
                    >
                      Уже выбран другой набор
                    </Typography.Text>
                  </div>
                )}
                {type && type === "zozh" && (
                  <div style={{ textAlign: "center" }}>
                    <div
                      onClick={() => {
                        setType("");
                        setTotalSum(399);
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "24px",
                        backgroundColor: "white",
                        textAlign: "center",
                      }}
                    >
                      Отменить
                    </div>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="secondary-large"
                      color="secondary"
                      defaultMargins={false}
                    >
                      Добавлено к подписке
                    </Typography.Text>
                  </div>
                )}
                {!type && (
                  <ButtonMobile
                    style={{ marginTop: "auto" }}
                    size="xl"
                    hint="Добавить к подписке"
                    onClick={() => {
                      setTotalSum((prevState) => prevState + 200);
                      setType("zozh");
                    }}
                  >
                    + 200 ₽ в месяц
                  </ButtonMobile>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "300px",
                marginLeft: "16px",
                marginRight: "16px",
              }}
            >
              <div
                className={appSt.slider}
                style={{
                  ...(type === "food" && { backgroundColor: "#F4F5F3" }),
                  marginRight: "16px",
                }}
              >
                <div
                  className={appSt.sliderTop4}
                  style={{
                    backgroundColor: "#FFFBDE",
                  }}
                >
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    weight="bold"
                    defaultMargins={false}
                    style={{ fontWeight: "500" }}
                  >
                    Вкусный
                  </Typography.Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Кэшбэк на WB в кафе и рестораны
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Чашка кофе в Пятёрочке в подарок каждый месяц
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "48px",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      defaultMargins={false}
                    >
                      Бесплатная доставка из Яндекс.Еды
                    </Typography.Text>
                    <img src={check} height="24" width="24" alt="" />
                  </div>
                </div>
                <Gap size={16} />
                {type && type !== "food" && (
                  <div style={{ textAlign: "center", marginTop: "auto" }}>
                    <div
                      onClick={() => {
                        setType("food");
                        setTotalSum(599);
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "24px",
                        backgroundColor: "#F3F4F5",
                        textAlign: "center",
                      }}
                    >
                      Заменить
                    </div>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="secondary-large"
                      color="secondary"
                      defaultMargins={false}
                    >
                      Уже выбран другой набор
                    </Typography.Text>
                  </div>
                )}
                {type && type === "food" && (
                  <div style={{ textAlign: "center", marginTop: "auto" }}>
                    <div
                      onClick={() => {
                        setType("");
                        setTotalSum(399);
                      }}
                      style={{
                        padding: "16px",
                        borderRadius: "24px",
                        backgroundColor: "white",
                        textAlign: "center",
                      }}
                    >
                      Отменить
                    </div>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="secondary-large"
                      color="secondary"
                      defaultMargins={false}
                    >
                      Добавлено к подписке
                    </Typography.Text>
                  </div>
                )}
                {!type && (
                  <ButtonMobile
                    style={{ marginTop: "auto" }}
                    size="xl"
                    hint="Добавить к подписке"
                    onClick={() => {
                      setTotalSum((prevState) => prevState + 200);
                      setType("food");
                    }}
                  >
                    + 200 ₽ в месяц
                  </ButtonMobile>
                )}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Gap size={128} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href=""
          onClick={submit}
          size="xl"
          hint={`${totalSum} ₽ в месяц`}
        >
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
