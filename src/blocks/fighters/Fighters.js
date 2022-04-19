import { Container, Wrapper, WrapperFighters, FighterBlockYang, FighterBlockLing, FighterBlockImgYang,FighterBlockImgLing, FighterBlockDiscription, FighterImg, FighterSupplyText,FighterDiscriptionText, FighterValue, FighterValueLi, CoinImg, BackgroundImg} from './Fighters.elements';
import yang from '../../image/Yang.png';
import ling from '../../image/Ling.png'
import coin from '../../image/Coin.png'
import Title from '../../components/title/Title';

const Fighters = () => {
    return(
        <Container>
          <BackgroundImg>
            <Wrapper>
                <WrapperFighters>
                    <Title>Fighters</Title>
                    <FighterBlockYang>
                      <FighterBlockImgYang>
                        <FighterImg src={yang}/>
                      </FighterBlockImgYang>
                      <FighterBlockDiscription>
                        <FighterSupplyText>Supply: 5000</FighterSupplyText>
                        <FighterDiscriptionText>
                        One of the first fighters in Nexus. Yang is a Chinese fighter from Shanghai who always wanted to be the best in each martial art. He is strong and fast enough to call himself a master. He has got a younger sister, Ling Ling, who hates him because he left dojo when she was young
                        </FighterDiscriptionText>
                        <FighterValue>
                          <FighterValueLi><CoinImg src={coin}/>yield 10 $MMMT everyday</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>get access to Ranked matchmaking</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>have exclusive rights</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>rent it out to earn $MMMT and $NXE</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>have an access to storymode</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>use it in craft or whatever you want (discord etc.)</FighterValueLi>
                        </FighterValue>
                      </FighterBlockDiscription>
                    </FighterBlockYang>
                    <FighterBlockLing>
                      <FighterBlockDiscription>
                        <FighterSupplyText>Supply: 5000</FighterSupplyText>
                        <FighterDiscriptionText>
                        Second fighter entered Nexus. Ling Ling is a Yang’s younger sister. After he left dojo when Ling Ling was only 6 years old, she suffered in trainings of secretive kill martial art. She wants to get stronger only for one mission - revenge brother
                        </FighterDiscriptionText>
                        <FighterValue>
                          <FighterValueLi><CoinImg src={coin}/>yield 10 $MMMT everyday</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>get access to Ranked matchmaking</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>have exclusive rights</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>rent it out to earn $MMMT and $NXE</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>have an access to storymode</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>use it in craft or whatever you want (discord etc.)</FighterValueLi>
                        </FighterValue>
                      </FighterBlockDiscription>
                      <FighterBlockImgLing>
                        <FighterImg src={ling}/>
                      </FighterBlockImgLing>
                    </FighterBlockLing>
                </WrapperFighters>
              </Wrapper>
            </BackgroundImg>
        </Container>
    )
}

export default Fighters