import { Hero } from "../components/Hero/Hero"
import { NewCollections } from "../components/NewCollections/NewCollections"
import { NewLetter } from "../components/NewLetter/NewLetter"
import { Offers } from "../components/Offers/Offers"
import { Propular } from "../components/Popular/Propular"

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Propular/>
        <Offers/>
        <NewCollections/>
        <NewLetter/>
    </div>
  )
}
