import { Link } from "react-router-dom";

const CharByHero = ({ alter_ego, characters }) => {

    if (alter_ego === characters) return (<></>);

    return <p>{characters}</p>

}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    // const charByActor = (<p>{characters}</p>);


    return (
        <>
            <div className="col col-md-4 col-lg-4 col-12 col-sm-12 animate__animated animate__fadeIn">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4 col-12 col-lg-4 col-md-8 col-sm-12 ">
                            <img src={heroImageUrl} className="card-img" alt={superhero} />
                        </div>
                        <div className="col-8 col-md-8 col-sm-12">
                            <div className="card-body">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="cardtext">{alter_ego}</p>

                                {
                                    <CharByHero characters={characters} alter_ego={alter_ego} />
                                }

                                <p className="card-text">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>

                                <Link to={`/hero/${id}`}>
                                    Más...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
