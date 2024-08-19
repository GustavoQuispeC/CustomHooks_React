import PropTypes from 'prop-types';

const PokemonCard = ({data}) => {
  return (
    <div className="card">
        <h2>{data.name}</h2>
          <img src={data.sprites?.front_default} alt={data.name}width={100} height={100}/>
            <h3>Abilities</h3>
            <ul>
              {data.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
    </div>
  )
}

export default PokemonCard

PokemonCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        sprites: PropTypes.shape({
        front_default: PropTypes.string,
        }),
        abilities: PropTypes.arrayOf(
        PropTypes.shape({
            ability: PropTypes.shape({
            name: PropTypes.string,
            }),
        })
        ),
    }),
}