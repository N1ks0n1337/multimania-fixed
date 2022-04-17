import React from 'react'
import Title from '../../components/title/Title'
import FirstHero from '../../image/collectibles/firsthero.png'
import SecHero from '../../image/collectibles/sechero.png'
import ThHero from '../../image/collectibles/thhero.png'
import FrHero from '../../image/collectibles/frhero.png'
import FifHero from '../../image/collectibles/fifhero.png'
import SixHero from '../../image/collectibles/sixhero.png'
import SevHero from '../../image/collectibles/sevhero.png'
import EigHero from '../../image/collectibles/eighero.png'
import NinHero from '../../image/collectibles/ninhero.png'
import TenHero from '../../image/collectibles/tenhero.png'
import { Container, Wrapper, CollectiblesItems, CollectiblesItemImg, CollectiblesImg } from './Collectibles.elements'

const Collectibles = () => {
  return (
      <Container>
        <Wrapper>
          <Title> Collectibles </Title>
            <CollectiblesItems>
              <CollectiblesItemImg>
                <CollectiblesImg src={FirstHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={SecHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={ThHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={FrHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={FifHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={SixHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={SevHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={EigHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={NinHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg>
                <CollectiblesImg src={TenHero}/>
              </CollectiblesItemImg>              
            </CollectiblesItems>
        </Wrapper>
      </Container>
  )
}

export default Collectibles