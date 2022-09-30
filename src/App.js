import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect } from "react";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
    dir: "rtl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

function App() {
  const currentLangCode = cookies.get("i18next") || "en";
  const currentLang = languages.find((l) => l.code === currentLangCode);
  const { t } = useTranslation();
  const number_of_days = "uzair";

  useEffect(() => {
    document.body.dir = currentLang.dir || "ltr";
    document.title = t("app_title");
  }, [currentLang, t]);

  return (
    <div className="App">
      <div className="d-flex flex-column align-items-center">
        {t("days_since_release", { number_of_days })}
      </div>
      <div className="row">
        {languages.map((lang) => {
          return (
            <button
              disabled={lang.code === currentLangCode}
              onClick={() => i18next.changeLanguage(lang.code)}
            >
              <div key={lang.country_code}>{lang.name}</div>
              <span
                style={{ opacity: lang.code === currentLangCode ? ".5" : "1" }}
                className={`fi fi-${lang.country_code}`}
              ></span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
