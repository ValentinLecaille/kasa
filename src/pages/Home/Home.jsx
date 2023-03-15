import '../../style/Home/Home.css';
import Banner from '../../components/Home/HomeBanner'
import FlatGrid from '../../components/Home/Flat-Grid'

// création de la fonction générale de la page d'accueil
function Home() {
  return (
    <>
      <Banner />
      <FlatGrid />
    </>
  )
}

export default Home;
