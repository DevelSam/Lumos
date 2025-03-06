import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import styles from './CollectionsPage.module.css'
import { FetchCollectionMovies } from "../api/FetchCollectionMovies";
import { FetchCollection } from "../api/FetchCollection";
export default function CollectionsPage(){
    const query  = useParams()
    const collection = query.list
    console.log(typeof(collection))
    const {data:CollectionData, isLoading:CollectionDataLoading } = useQuery(['CollectionData', collection], () =>  FetchCollectionMovies(collection))
    const {data:CollectionTitle,  isLoading:CollectionTitleLoading} = useQuery(['CollectionTitle', collection], () =>  FetchCollection(collection))
    console.log(CollectionData)
    console.log(CollectionTitle)
    function formatRationg(rating){
        return Number.isInteger(rating) ? rating.toFixed(1): rating.toFixed(1);
    }
    return(
        <>
        <Header />
        <p></p>
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                {CollectionDataLoading || CollectionTitleLoading ? ( 
                   <p></p>
                ): ( <>
                    <h1 className={styles.title}>{CollectionTitle.name}</h1>
                    <div className={styles['content-block']}>
                    {CollectionData.docs.map(value => (
                        
                        <div key={value.id} className={styles.content}>
                            <Link to={`/film/${value.id}`}>
                             <div className={styles.block}>
                                <img loading="lazy" src={value.poster?.url} className={styles.image} alt="" />  
                                </div>
                                {value.rating.imdb || value.rating.kp ? (
                                <div className={styles.score}>
                                    <div className={styles['score-container']}>
                                        <span className={styles.number}> { formatRationg(value.rating.imdb || value.rating.kp)}</span>
                                    </div>
                                    
                                </div>
                                
                                ):null}    
                                </Link>
                                {/* <p className={styles.title}>{value.name}</p> */}
                        </div>
            
                    ))}
                    </div>
                    </>)} 
               
                
            </div>
        </section>
        
        <Footer />
        </>
    )
}