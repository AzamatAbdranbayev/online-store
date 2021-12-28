import BlackHawkIndex from '../components/BlackHawkIndex/BlackHawkIndex';
import BlackHawkInfo from '../components/BlackHawkIndex/BlackHawkInfo';
import IndicatorsIndex from '../components/IndicatorsIndex/IndicatorsIndex';
import MainLayout from '../components/MainLayout/MainLayout';

export default function Home() {
  return (
    <>
      <MainLayout title="Главная страница">
        <BlackHawkIndex />
        <IndicatorsIndex />
        <BlackHawkInfo />
      </MainLayout>
    </>
  );
}
