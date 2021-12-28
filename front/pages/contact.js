import MainLayout from '../components/MainLayout/MainLayout';
import styles from '../styles/contact.module.css';
export default function Contact() {
  return (
    <>
      <MainLayout title="Контакты">
        <div>
          <h2>Нам доверяют</h2>
        </div>
        <script
          type="text/javascript"
          charSet="utf-8"
          async
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab36f5ade643e3ab4b7a264db22bac5c07cf8c71bf3f66f83518466cc01c6be7f&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"
        ></script>
      </MainLayout>
    </>
  );
}
