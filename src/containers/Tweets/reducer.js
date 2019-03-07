import { fromJS } from 'immutable';
import {
  LOAD_REPOS_ERROR,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS
} from '../App/constants';
import Log from '../../utils/Log';

export const initialState = fromJS({
  tweets: fromJS([
    {
      id: 1103423470338158593,
      fullText:
        "RT @Cali_Tracii: Watch @RealErinCruz's broadcast: .@RANACTIONFUND #TrinityCounty https://t.co/qvnCTUM5VE cc @POTUS https://t.co/vimfLpvHUC",
      username: 'loveshoulas',
      name: 'catawhat  ⭐⭐⭐',
      createdAt: 1551911630000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423462834692097,
      fullText:
        'RT @EasleyAlan: @Sun_Q_Tzu @POTUS @realDonaldTrump https://t.co/RjdGvAN2iL',
      username: 'lazycrank',
      name: 'lock them up',
      createdAt: 1551911628000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423462834606080,
      fullText: 'RT @MikesLife7: @Can2geterdone @POTUS https://t.co/3liIAB2BbF',
      username: 'aydoneymang',
      name: 'Tonyh1882 ⏫',
      createdAt: 1551911628000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423459336638465,
      fullText:
        'RT @JoanofAmerica: @ks374365 So thankful #TheWitch didn’t win. \n\nThank God for @POTUS 🇺🇸❤️🙏 https://t.co/agk8V5w2s8',
      username: 'KyManInTheWoods',
      name: 'Gabriel',
      createdAt: 1551911627000,
      sentiment: 'POSITIVE'
    },
    {
      id: 1103423457277165571,
      fullText:
        'RT @joegooding: This is exactly how Congress, and NOT the courts, should deal with the National Emergency Declaration over the southern bor…',
      username: 'canalzone721',
      name: '❌ Kelley Jo canalzone721',
      createdAt: 1551911627000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423455070957568,
      fullText:
        "@sexxxylisa @w_terrence @POTUS It proves we have very obvious Voter Fraud! Or we have lots of very stupid & or paid off fellow US Citizens! Eitherway, it's really sad! https://t.co/awIgFuEBzC",
      username: 'Concrete4Cowboy',
      name: 'B SaltwaterConcreteCowboy Halas',
      createdAt: 1551911626000,
      sentiment: 'NEGATIVE'
    },
    {
      id: 1103423454156591104,
      fullText:
        '@FemFoxx @Joan1Barb @POTUS @realDonaldTrump @realDonaldTrump WV. Need you help',
      username: 'reddog0468',
      name: 'reddog',
      createdAt: 1551911626000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423453376450562,
      fullText:
        '@POTUSPress @POTUS @RealJamesWoods @realDonaldTrump @RealMattCouch @WhiteHouse @SheriffClarke @SebGorka https://t.co/azeridPSqF',
      username: 'younglady037833',
      name: 'Chakra',
      createdAt: 1551911626000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423446153859075,
      fullText:
        'Everyday across America and in every state https://t.co/J652wOb3sC via @YouTube @POTUS @SeanHannity WAKE UP VIRGINIA',
      username: 'Teressastone41',
      name: 'Teressastone4',
      createdAt: 1551911624000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423445533118465,
      fullText:
        'RT @Redhead4645: So this is who it really comes down to! @SpeakerRyan and @senatemajldr neither of them were behind Donald J. Trump for sur…',
      username: 'Chrisconsrv1776',
      name: 'Chris  🇺🇸 Let Freedom Ring',
      createdAt: 1551911624000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423437303922690,
      fullText:
        'RT @Justiciera75: #6Mar Este pajarito pensaba q iba a pasar desapercibido ... Se trata de Miguel Schmilisky tiene 18 años  pero ya\nVive com…',
      username: 'superm471',
      name: 'tamara bambu',
      createdAt: 1551911622000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423435085045760,
      fullText:
        'RT @bessbell: @realDonaldTrump @POTUS After Charlottesville you said there were very fine people on both sides.',
      username: 'pdiener70',
      name: 'p m diener',
      createdAt: 1551911622000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423434330116100,
      fullText:
        'RT @DJTsavesAmerica: @GOPChairwoman @Ronald200090 @realDonaldTrump They are going to find a receipt that in 1987 at a convenient store #DJT…',
      username: 'WillemLafluer',
      name: 'Willem Lafluer',
      createdAt: 1551911622000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423434241916928,
      fullText:
        'RT @MikesLife7: @ercwilder95 @Can2geterdone @LindaForAmerica @POTUS Brennen first with a public trial.',
      username: 'Can2geterdone',
      name: 'RW 🇺🇸',
      createdAt: 1551911621000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423432983748608,
      fullText:
        'Trump CPAC speech: Colorful launch for his 2020 presidential campaign - https://t.co/SNzMLps8dS via @commdiginews @VP @POTUS @realdonaldtrump @foxnews',
      username: 'mbusler',
      name: 'michael busler',
      createdAt: 1551911621000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423427627622400,
      fullText:
        '@LockheedMartin @POTUS @IvankaTrump @WhiteHouse Ah yes.\nThats how this kleptocracy works.\nIvanka Trump, Advisor to POTUS, AND Lockheed Board Chair.',
      username: 'Eliza328',
      name: 'Eliza K',
      createdAt: 1551911620000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423426885234688,
      fullText:
        'RT @ToddHeadleeAZ: If anyone deserves to meet @POTUS @realDonaldTrump then @ScottPresler does. Maybe @RealDrGina or @DonaldJTrumpJr or @Kat…',
      username: 'kkbear',
      name: 'Kaye Bearden',
      createdAt: 1551911620000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423426230923264,
      fullText:
        '@Almagro_OEA2015 @soyfdelrincon @beatrizbecerrab @VP @AmbJohnBolton @Elliott_Abrams @WHAAsstSecty @POTUS https://t.co/tSMGfYBnhL',
      username: 'ElisaHougaard',
      name: 'ElisaHougaard',
      createdAt: 1551911620000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423425811369984,
      fullText:
        '@realDonaldTrump @WhiteHouse God Bless Michael Cohen and the Rule of Law.  As opposed to the rule of the bulging pants - the fact that @Potus and @DonaldJTrumpJr both Schtuped women while their wives were had been in postpartum mode.  Poor Barron has no good role models in this family - maybe Gen. Kelly.',
      username: 'smarchivist',
      name: 'Murph the Archivist ☘️',
      createdAt: 1551911619000,
      sentiment: 'NEGATIVE'
    },
    {
      id: 1103423424800579584,
      fullText:
        'Maduro just reTweeted:\npersonally i’ve attempted to help,\nmost there are drug addicts and return despite help, they like the lifestyle.\nhaving said that,\nit’s a shame for Los Angeles\n(northeast dtla)\n@ericgarcetti @TeamPelosi @SpeakerPelosi @POTUS  @realDonaldTrump @NicolasMaduro https://t.co/NffqjPX2a6',
      username: 'LosAngelesVic',
      name: '•',
      createdAt: 1551911619000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423424742019074,
      fullText:
        '@VP @DEAPHOENIXDiv @dougducey @POTUS No it’s not as you are well aware.  Just resign.  You swore to uphold the Constitution.  If you cannot it’s time to go.',
      username: 'Daisyandboy',
      name: 'CAC',
      createdAt: 1551911619000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423422644830209,
      fullText:
        '@realDonaldTrump @POTUS Do not allow your people to testify, PERJURY TRAP!',
      username: 'pdb0518',
      name: 'Paul D. Belle',
      createdAt: 1551911619000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423421269114880,
      fullText:
        'RT @SidneyPowell1: This money could\n1. Care for #American #Veterans \n2. Improve #American schools\n3. Care for #American children\n4. Care fo…',
      username: 'PatrickBaughan1',
      name: '@PatrickBaughan',
      createdAt: 1551911618000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423420749041665,
      fullText:
        'RT @KattmaddoxAl: @AnonMonkeyMan1 @RealTT2020 @Crustyone2 @unlockMEDIA @ShushaLe @GoboMontaco @POTUS @bbl58 @SaveOur1st @StappElizabeth @Li…',
      username: 'GaryDehart7',
      name: 'Gary Dehart',
      createdAt: 1551911618000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423416613457921,
      fullText:
        'RT @LynneDeena: @fishinchickga @realDonaldTrump @POTUS That is what got me into this fight...the children and making it a better world for…',
      username: 'fishinchickga',
      name: '❌ Ga 4 Trump #KAG2020 #Trump2020',
      createdAt: 1551911617000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423413648064513,
      fullText: '@realDonaldTrump @POTUS https://t.co/zfZSgmBdW3',
      username: 'john_briggs2',
      name: 'John Briggs',
      createdAt: 1551911617000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423410896621570,
      fullText:
        'RT @JoanofAmerica: @ks374365 So thankful #TheWitch didn’t win. \n\nThank God for @POTUS 🇺🇸❤️🙏 https://t.co/agk8V5w2s8',
      username: 'BenJackd1',
      name: '🇺🇸Ben Jack’d🇺🇸',
      createdAt: 1551911616000,
      sentiment: 'POSITIVE'
    },
    {
      id: 1103423407352233984,
      fullText:
        "RT @LadyRedWave: DO IT NOW @POTUS! IT is TIME! \nTrump threatens to declassify 'devastating' docs about Democrats https://t.co/cWOwnWd7iE vi…",
      username: 'LakesPlace',
      name: 'Carl B. LaKing🍁',
      createdAt: 1551911615000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423406878441472,
      fullText:
        'RT @RepMattGaetz: Democrats are offering no solutions- just more investigations and attacks. The good news is the forgotten men and women o…',
      username: 'nascarred14',
      name: 'DJ_Patriot ⭐️⭐️⭐️🇺🇸🇺🇸🇺🇸',
      createdAt: 1551911615000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423404428820480,
      fullText:
        'RT @144000bound: Q - The Plan To Save The World REMASTERED https://t.co/uPIcFbu28B THE GREAT AWAKENING NEW AND UPDATED! Thanks @StormIsUpon…',
      username: 'TrakkerJane',
      name: 'Jane Trakker D.D.  🇺🇸🇮🇱',
      createdAt: 1551911614000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423402172399616,
      fullText:
        '@WhiteHouse @POTUS The real emergency is having a President and Press Sec. ho lie to Americans everyday.  \nThe National Dept is an emergency.  \nHaving a corrupt President is an emergency.\nTrump kissing up to the Killer Dictators in the world is an Emergency.\nWhite Nationalism is an emergency.',
      username: 'JudyChu06634420',
      name: 'Judy',
      createdAt: 1551911614000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423402033983490,
      fullText:
        '@TheRightMelissa @DineshDSouza Melissa if u want 2do somethin good 4a good cause ,The USA & @realDonaldTrump presidency !\nPlz Take "right" off of ur name so the DEAF LEFT Cn HEAR U Promoting Ideas 2 lft&Young & stop thz MORONS frm pretendin lik EVRY1 is a racist n r country & that weR so divided !\n\nGo @POTUS !',
      username: 'ezt714',
      name: 'Bryan Davis',
      createdAt: 1551911614000,
      sentiment: 'NEGATIVE'
    },
    {
      id: 1103423395373432836,
      fullText:
        'RT @RepMattGaetz: Democrats are offering no solutions- just more investigations and attacks. The good news is the forgotten men and women o…',
      username: 'iknowthat22',
      name: 'Linda',
      createdAt: 1551911612000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423387383283713,
      fullText:
        'RT @StewardshipAmer: @MSPOA @SidneyPowell1 @realDonaldTrump @LouDobbs @POTUS It ought to be obvious, that Republican senators are beholden…',
      username: 'dbrboyce',
      name: 'Debra L. Boyce',
      createdAt: 1551911610000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423387060326400,
      fullText:
        'RT @unlockMEDIA: RT @ShushaLe: @GoboMontaco @POTUS @bbl58 @SaveOur1st @AnonMonkeyMan1 @StappElizabeth @LindseyGrahamSC @RealTT2020 @BlueSea…',
      username: 'GaryDehart7',
      name: 'Gary Dehart',
      createdAt: 1551911610000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423383465873414,
      fullText:
        'RT @RL9631: Sen. David Perdue said there’s no question that walls work. Build the Wall! Secure our borders. Support our President! \u2066@POTUS\u2069…',
      username: 'lchall1214',
      name: 'Linda Hall',
      createdAt: 1551911609000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423383377793024,
      fullText:
        'RT @KathySoltani: This anti-Semite, in defense of another, makes a hateful point. “Typical white feminist”? Guess what @lsarsour ? We white…',
      username: 'brenda28666698',
      name: 'brenda',
      createdAt: 1551911609000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423381456805889,
      fullText:
        'RT @JimBridenstine: The new era in spaceflight starts now. @NASA will be one customer of many customers in low-Earth orbit, driving down co…',
      username: 'mewhunter67',
      name: 'Derek Mullins',
      createdAt: 1551911609000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423377652441088,
      fullText:
        'Who would have thought Lindsey would be the guy with the most balls in the Republican Party ( except for @POTUS ) https://t.co/7vcFw7oM21',
      username: 'DrJohn76533054',
      name: '❌Dr. John(Deplorable)❌',
      createdAt: 1551911608000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423371126042624,
      fullText:
        'RT @MikesLife7: @Fattyrz4Rocco @Can2geterdone @ExposingLibsBS @POTUS @JohnBrennan https://t.co/o6qSAOrMiW',
      username: 'Can2geterdone',
      name: 'RW 🇺🇸',
      createdAt: 1551911606000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423362519326720,
      fullText:
        'RT @Paddytheturkho2: @TheSilentLOUD @AmericanHere @POTUS Here for you brother,in our prayers x Devon England UK',
      username: 'Vickyjeter4',
      name: 'Vicky jeter',
      createdAt: 1551911604000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423358564294657,
      fullText:
        '@verawishful1 @djamplifide @MollyJongFast @POTUS Well, he is responsible for that... and that’s definitely not following the same trend. Does he get credit for that?',
      username: 'peteycraw69',
      name: 'Petey Crawford',
      createdAt: 1551911603000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423352100794369,
      fullText:
        'RT @dmills3710: 🇺🇸NO SHARIA ZONES IN AMERICA🇺🇸 Stop Dividing USA By Race, Religion, National Origin🇺🇸 US/WV Housing Should Be Open For All…',
      username: 'ncbrokeman',
      name: 'Michael❌',
      createdAt: 1551911602000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423341921091584,
      fullText:
        'RT @beth2_k3a: Check "Yes" and RT if you hate the Democrats and promise NOT to vote for them in 2020 due to their destruction of America an…',
      username: 'lynmarti7',
      name: 'STORMWATCH +++',
      createdAt: 1551911599000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423340767662080,
      fullText:
        'RT @FemFoxx: Wtf is going on In W. Virginia🤬😡??   #ShariaLaw coming to a neighborhood near you. #WakeUpAmerica 🇺🇸🇺🇸🇺🇸 Americans are not gon…',
      username: 'loveshoulas',
      name: 'catawhat  ⭐⭐⭐',
      createdAt: 1551911599000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423338926563333,
      fullText:
        'RT @carrieksada1: If you haven’t seen👇🏼 painting by @McNaughtonArt,\nIt is a stunning portrayal of the politicians who’ve sold out our count…',
      username: 'ginaloera3',
      name: '(Texas republican transsexual )',
      createdAt: 1551911599000,
      sentiment: 'POSITIVE'
    },
    {
      id: 1103423336518901761,
      fullText:
        'RT @johncardillo: Earlier I tweeted out a heartwarming story about @POTUS calling a Connecticut man dying of cystic fibrosis. \n\nThe replies…',
      username: '1IDVET',
      name: '1IDVET ΜΟΛΩΝ ΛΑΒΕ',
      createdAt: 1551911598000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423331854938113,
      fullText:
        "RT @Vicky4Trump: If, like me, you are going to #VoteTrump2020, please Retweet. \n\nLet's show our @POTUS how much his dedication to America &…",
      username: 'archam2nina',
      name: 'Trish Archambault',
      createdAt: 1551911597000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423321457205248,
      fullText:
        '.@FoxNews @foxandfriends @JudgeJeanine @seanhannity @hughhewitt @LouDobbs @BreitbartNews @IngrahamAngle @TuckerCarlson @TomiLahren @NRA  @Franklin_Graham @700club @LibertyU @JerryFalwellJr @POTUS @RudyGiuliani @FDRLST @USATODAY https://t.co/PLDRvtRyMi',
      username: 'Bckrda',
      name: 'daniel smith',
      createdAt: 1551911595000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423315501187072,
      fullText: 'RT @bbl58: @GregNorberg @POTUS @realDonaldTrump',
      username: 'bbl58',
      name: 'Barbara Soliz ⭐⭐⭐',
      createdAt: 1551911593000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423310875033600,
      fullText:
        "RT @Gadawg1971: @CactusFlower_1 @RepMaxineWaters @POTUS Maxine, we have all seen what you do for the people. I wouldn't trust you to open a…",
      username: 'jet_thomson',
      name: 'Elaine NoWallFundingNoDeal',
      createdAt: 1551911592000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423308752658433,
      fullText:
        'RT @KathySoltani: @GOP @Trader_Moe @RepMarkGreen As I understand it, you’re supposed to have spines. Stiffen them and support @POTUS . Find…',
      username: 'HernandoDeSot11',
      name: 'Legal Alien 🇺🇸',
      createdAt: 1551911592000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423307733483520,
      fullText:
        'Now a man!! #TheRainMakers #StrengthInUnity\n#QAnon #MAGAveteran\n#BuildTheWall #KAGPatriots #Q \n.@POTUS #BuildTheWall #TrumpLane https://t.co/JgEpWBzXlF',
      username: 'tographer',
      name: 'Rico',
      createdAt: 1551911591000,
      sentiment: 'POSITIVE'
    },
    {
      id: 1103423307632635904,
      fullText: '@lynngrayson @POTUS What?',
      username: 'AndresS45303251',
      name: 'I have no clue.',
      createdAt: 1551911591000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423306760220672,
      fullText:
        'RT @LizzieBelle66: Yes he is and he would get more done, if they would stop blocking everything he does. @RandPaul @tedcruz  We do have a c…',
      username: 'RobertSprayberr',
      name: 'Robert Sprayberry',
      createdAt: 1551911591000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423305749590017,
      fullText:
        'RT @ggs51: @TrueCrimePoli @SidneyPowell1 @realDonaldTrump @LouDobbs @POTUS When does this madness stop?What can we do to stop it? Caravans…',
      username: 'EffinBartIt',
      name: 'EffinBartIt',
      createdAt: 1551911591000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423305653067776,
      fullText:
        '.@POTUS @DonaldJTrumpJr @kimguilfoyle @VP @Jim_Jordan @RepMarkMeadows @replouiegohmert @freedomcaucus @HouseGOP @SenateGOP @SenateMajLdr @GOPLeader @SenSchumer @SpeakerPelosi @TheDemocrats\n\nhttps://t.co/hnpQV7UbYV',
      username: 'Soldier4All',
      name: 'Soldier4All  ⭐ ⭐ ⭐',
      createdAt: 1551911591000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423305074257923,
      fullText:
        '@TrumpitC @realamericanUS @Kimperiale @PaulConservativ @BatmanGothamUSA @MaryHopeHarmony @amadmavworld @jonmtaggart @itbmeang @LinaCovfefe @clearimages @PantasticPuppy @BrentBrieger @POTUS @Storm4SethRich @bigvolt50 @Troy75801 @RealKyleMorris @OldManStoneZone @DonnaWR8 @ARmastrangelo @carlalykins @Cordicon @76rooster @jaimec729 @56NancyB @anelda24 @BettyO417 @pmeech1 @booksey_226 @billysgirl0214 @judellenf @csava247 @ghostrider050 @PrayerCanadian @pizzeman317 @KimfmKim @JSimonds27 @Kate0Blue @TheDemocrats @CollinRugg @eugenedelgaudio @PeteHegseth @charliekirk11 @RyanAFournier @RealMattCouch @CLewandowski_ @Education4Libs @GodHasThisNow @ChatByCC I am going to sign up now',
      username: 'FeeAngel223',
      name: 'Free Angel 😇',
      createdAt: 1551911591000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423299088977922,
      fullText:
        "RT @DRottiemom: @caskett2014 @POTUS @SecNielsen 💖💖💖\nListen to this! @dbongino details of @realDonaldTrump 's\nmoney trail for the wall...it'…",
      username: 'TankIncU',
      name: 'Man with no name',
      createdAt: 1551911589000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423296589254657,
      fullText:
        "RT @Redhead4645: I'm having trouble with:: The left wants to go after Trumps tax returns! They don't give a crap abt Hillary selling 20% of…",
      username: 'KenGrimes9',
      name: 'TheRealDadof6( #MAGA🇺🇸 )',
      createdAt: 1551911589000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423288238321664,
      fullText:
        'RT @Tony85783091: @4AmericanKat @Libra5405 @POTUS Judge Va Fa Napoli..................',
      username: '4AmericanKat',
      name: 'AmericanKat🇺🇸',
      createdAt: 1551911587000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423287181348865,
      fullText:
        '@KattmaddoxAl @RealTT2020 @AnonMonkeyMan1 @Crustyone2 @unlockMEDIA @ShushaLe @GoboMontaco @POTUS @bbl58 @SaveOur1st @StappElizabeth @LindseyGrahamSC @BlueSea1964 @QmagaMike @SteveKingIA @karli_bonne @MrEarpLA @DeeGR8whiteluvr @dmills3710 @TJLibertyBelle @notch @GOP #NeverHillary \n#WeThePeople \n#MAGA \n#WWG1WGA \n#Trump2020 \n#ISTANDWITHGENFLYNN https://t.co/swKQBfbTKE',
      username: 'GaryDehart7',
      name: 'Gary Dehart',
      createdAt: 1551911586000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423271964422145,
      fullText:
        '@bangolure @joegooding @POTUS @realDonaldTrump @jjauthor @RedNationRising @PatriotJenn @IamMonicaRae @ChristieC733 @Lady_Vi_2U @My305Rita @vaxchoiceeast @Movanhook @TomFitton Thats a fact. No wonder the Republicans never win on important things they always shoot them selves in the foot. MAGA 🇺🇸🔥✅',
      username: 'DennisH59386592',
      name: 'Dennis Harrison',
      createdAt: 1551911583000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423270106341376,
      fullText:
        'RT @Yeshuaschildren: @senatemajldr @mitchellvii And nothing encapsulates your continued failure so well as your failure to fulfill your pro…',
      username: 'LowBMI',
      name: '✌Trump Card Patriot 1776✌',
      createdAt: 1551911582000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423266402656256,
      fullText:
        'RT @SonnyWarren350: @4AmericanKat @LizLiz_Di @POTUS He moved over to the dark side some time ago. He use to be an ok guy. Now he just sound…',
      username: '4AmericanKat',
      name: 'AmericanKat🇺🇸',
      createdAt: 1551911581000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423264532107267,
      fullText:
        'RT @dawg_lb: Is it any surprise there are more registered 2 vote n Los Angeles County than population?\n\nAfter all did not Adam Shiff, Maxin…',
      username: 'younglady037833',
      name: 'Chakra',
      createdAt: 1551911581000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423264393592832,
      fullText:
        '@beth2_k3a @mel_is_a_texan @Barracuda_Bella @CongressEthics @POTUS I a me sorry to say this, but the Islamists that are in our government love Sharia law and should not be representing the American Government!',
      username: 'LindaTolefo',
      name: 'Linda Tolefo',
      createdAt: 1551911581000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423264313901057,
      fullText:
        '@senatemajldr The men and women of the CBP at our southern border need Congress to back our @POTUS \n#Emergency\n#HumanitarianCrisis https://t.co/eTXfmPNeN7',
      username: 'LaqiMuSeediq',
      name: 'PatriotInTheHills',
      createdAt: 1551911581000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423263726858241,
      fullText:
        "RT @NeensCa: I don't know what part of this statement\n\n@dnc \n@RepMaxineWaters @RashidaTlaib \n@Ilhan \n@SpeakerPelosi @chuckschumer  \n\ndon't…",
      username: 'BradbuCraig',
      name: 'Craig #HisNameWasSethRich (wizard) 🇺🇸 #MAGA',
      createdAt: 1551911581000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423260396408832,
      fullText:
        'RT @FreedomFiter71: @Obtusewindow @intheMatrixxx @POTUS The news media spraying the public wildly with bullets of investigations, fake news…',
      username: 'HuajatollaChic',
      name: 'HuajatollaChic',
      createdAt: 1551911580000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423256550408193,
      fullText:
        'RT @StephenSpeaksUp: @POTUS @senatemajldr @GOP @LindseyGrahamSC \n\nI agree Mr. President!!\n\nLet the Democrats keep being stupid to help get…',
      username: 'Boyd_2650',
      name: 'Diane Boyd',
      createdAt: 1551911579000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423254398685184,
      fullText: "@4AmericanKat @POTUS HE'S A RINO",
      username: 'TheeAndroidRulz',
      name: 'Ξ 𝔸ℕ𝔻ℝ𝕆𝕀𝔻 ℝ𝕌𝕃ℤ Ξ ⚡️',
      createdAt: 1551911579000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423252209303553,
      fullText:
        'RT @MarisaPulice: @mateagold @myhlee @Jim_Jordan is complicit to boys being sexually abused, look into the consequences for that!\n@POTUS or…',
      username: 'lisawyman62',
      name: 'Lisawyman62@gmail.com',
      createdAt: 1551911578000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423246475710467,
      fullText:
        'RT @tunarose2: Just think how much could have been accomplished by Congress in the two years and counting that they have spent looking for…',
      username: 'DollCakes24',
      name: 'Nunya',
      createdAt: 1551911577000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423243908571137,
      fullText:
        "@StenyHoyer So when does Louis #Farrakhan announce he's running for the #Democrat nomination for @POTUS? And when do you endorse him? \n\n#Democrats=Anti-Semites. \n\n#tcot #p2",
      username: 'JElliotCO',
      name: 'WEAR YOUR MAGA HAT PROUDLY! It means PRO-AMERICA!',
      createdAt: 1551911576000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423232433106945,
      fullText:
        '@purplehead5 @LynnePatton @DenisBrown52 @RepMarkMeadows @POTUS @DonaldJTrumpJr @DiamondandSilk @EricTrump @RealCandaceO @charliekirk11 @LaraLeaTrump @IvankaTrump @TiffanyATrump @parscale @kimguilfoyle @LynnePatton ever wonder why when someone mentions how articulate someone is the person they are talking about is black hmmmmmm',
      username: 'LamarHunt10',
      name: 'Lamar Hunt',
      createdAt: 1551911573000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423223105024000,
      fullText:
        "RT @Redhead4645: I'm having trouble with:: The left wants to go after Trumps tax returns! They don't give a crap abt Hillary selling 20% of…",
      username: 'Chrisconsrv1776',
      name: 'Chris  🇺🇸 Let Freedom Ring',
      createdAt: 1551911571000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423219787288576,
      fullText:
        '@realamericanUS @Kimperiale @PaulConservativ @BatmanGothamUSA @MaryHopeHarmony @amadmavworld @jonmtaggart @itbmeang @LinaCovfefe @clearimages @PantasticPuppy @BrentBrieger @POTUS @Storm4SethRich @bigvolt50 @Troy75801 @RealKyleMorris @OldManStoneZone @DonnaWR8 @ARmastrangelo @carlalykins @Cordicon @76rooster @jaimec729 @56NancyB @anelda24 @BettyO417 @pmeech1 @booksey_226 @billysgirl0214 @judellenf @csava247 @ghostrider050 @PrayerCanadian @pizzeman317 @KimfmKim @JSimonds27 @Kate0Blue @TheDemocrats @CollinRugg @TrumpitC @eugenedelgaudio @PeteHegseth @charliekirk11 @RyanAFournier @RealMattCouch @CLewandowski_ @Education4Libs @GodHasThisNow @ChatByCC I just followed you. As people follow you, you should be able to start following again',
      username: 'FeeAngel223',
      name: 'Free Angel 😇',
      createdAt: 1551911570000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423217887313920,
      fullText:
        'RT @beth2_k3a: Check "Yes" and RT if you hate the Democrats and promise NOT to vote for them in 2020 due to their destruction of America an…',
      username: 'LetzBrealistic',
      name: 'SME',
      createdAt: 1551911570000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423217845391360,
      fullText:
        'RT @OliverMcGee: WOW! Listen to this awesome clip on Hollywood! Socialists lord over US at @TheAcademy #Oscars as California has the highes…',
      username: 'sharrols',
      name: '#Declassifyitall⭐️⭐️⭐️',
      createdAt: 1551911570000,
      sentiment: 'POSITIVE'
    },
    {
      id: 1103423216201146369,
      fullText:
        'RT @LibsRLunes: @JoshZampich @RepDanCrenshaw @SecNielsen But with Congress "playing politics as usual" on the border & immigration issue, m…',
      username: 'starlady24',
      name: 'naturelover⭐️⭐️⭐️',
      createdAt: 1551911570000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423216033431552,
      fullText:
        '@VzlaVetada @Noelleal 👆🏻@POTUS @VP @SecPompeo @AmbJohnBolton @elnuevoherald @SenRubioPress @SenRickScott @VOANoticias @bbcmundo @CarlosAsuajeS @Mmorin_informa @AlbertoRodNews @alekboyd @A3Noticias @ecucol @MyrianeLibre @MonicaAparicioA @geopolytica @gonzalolezama1 @GerdLuders @yolyhabanera @CHC31',
      username: 'aba261',
      name: 'ANA B. ABA 990200',
      createdAt: 1551911569000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423214342955008,
      fullText:
        '@POTUS MY VOTE is legitimate and will be counted #VoteBlueNoMatterWho NO MORE #GOPCorruption NO MORE #LiarInChief NO more destroying our country. \nDonald Trump is laying the groundwork to de-legitimize the 2020 election - CNNPolitics https://t.co/wyZz5Y4w8C',
      username: 'rychemom',
      name: 'Lori Campbell 🌊',
      createdAt: 1551911569000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423213856411648,
      fullText:
        'RT @BullPup2A: The number of foreign invaders that are breaching our borders is Staggering! This IS a national emergency @POTUS PLEASE #Bui…',
      username: 'Visitor22',
      name: 'Visitor 22 ❌',
      createdAt: 1551911569000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423213357486083,
      fullText:
        'RT @mymynags: 🚨SUPPORT THE PRESIDENT, SEN. REPUBLICANS❗️EVEN THE AMORAL DEMS STOOD IN SOLIDARITY WITH TRESONOUS OBAMA WHEN HE GAVE OUR RESO…',
      username: 'KyManInTheWoods',
      name: 'Gabriel',
      createdAt: 1551911569000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423213013532673,
      fullText:
        'RT @FemFoxx: Wtf is going on In W. Virginia🤬😡??   #ShariaLaw coming to a neighborhood near you. #WakeUpAmerica 🇺🇸🇺🇸🇺🇸 Americans are not gon…',
      username: 'ChocChip52',
      name: 'Doc Stuart',
      createdAt: 1551911569000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423208441724929,
      fullText:
        'RT @crazee_rdz: The reason so many hate @realDonaldTrump is - previous administrations and congresses have allowed so many issues to get to…',
      username: 'crazee_rdz',
      name: 'crazeerdz',
      createdAt: 1551911568000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423207938379777,
      fullText:
        'RT @rlamartini: @puppyluvr312 @JoeAllenNewman @kathleenaie @PAINWARRIORTEAM @stupor2016 @BonnieZ36975344 @tal7291 @LelenaPeacock @WHoward13…',
      username: 'puppyluvr312',
      name: 'J. A. G.  🐴🦋🇺🇸🐩',
      createdAt: 1551911568000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423203811168261,
      fullText:
        'RT @beth2_k3a: Check "Yes" and RT if you hate the Democrats and promise NOT to vote for them in 2020 due to their destruction of America an…',
      username: '5dogsmommy22',
      name: 'Gabby',
      createdAt: 1551911567000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423200816291841,
      fullText:
        'RT @ToddHeadleeAZ: @marthamaccallum @Mediaite So maybe @POTUS @realDonaldTrump should deem any Presidential Debate hosted by @CNN would be…',
      username: 'kimberly010960',
      name: 'KFRIEND  💒🌵🌞',
      createdAt: 1551911566000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423194218840069,
      fullText:
        'RT @Can2geterdone: Border Crisis Hearing: “It’s Real. It’s Serious. It is a Threat.” \n\nAgain, All the Data And All the Facts Show That the…',
      username: 'Margie596011',
      name: 'Margie',
      createdAt: 1551911564000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423194172657666,
      fullText:
        'RT @Justiciera75: #6Mar Este pajarito pensaba q iba a pasar desapercibido ... Se trata de Miguel Schmilisky tiene 18 años  pero ya\nVive com…',
      username: 'consultorjj8a',
      name: 'roman',
      createdAt: 1551911564000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423192402743296,
      fullText:
        'RT @cs00582scs: UN trying to legislate hate speech to all who signed the UN Migration Pact....\n\nExactly what Dems trying to do with this re…',
      username: 'RickRed10',
      name: '❌Rick❌  🇨🇦',
      createdAt: 1551911564000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423184651603969,
      fullText:
        'RT @NoAOCGreenDeal: @Can2geterdone @ExposingLibsBS @POTUS https://t.co/X42RWe7lwB',
      username: 'Boldwolf2',
      name: 'Vernon Skinner Jr.',
      createdAt: 1551911562000,
      sentiment: 'NEUTRAL'
    },
    {
      id: 1103423181371727875,
      fullText:
        "The reason so many hate @realDonaldTrump is - previous administrations and congresses have allowed so many issues to get to the 'disaster' level - and he/@POTUS is doing something about these issues! https://t.co/C5DNaJmIYD",
      username: 'crazee_rdz',
      name: 'crazeerdz',
      createdAt: 1551911561000,
      sentiment: 'NEGATIVE'
    },
    {
      id: 1103423180025274370,
      fullText:
        'RT @EdLaborGOP: These are the facts: the U.S. job market and economy are thriving. The economy has added jobs for 100 consecutive months, w…',
      username: 'WorkerFreedom',
      name: 'workerfreedom,org',
      createdAt: 1551911561000,
      sentiment: 'NEUTRAL'
    }
  ]),
  loading: false,
  error: null
});

function tweetsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TWEETS:
      Log.trace(
        'FETCH_TWEETS: loading set to true, error to null',
        'Tweets reducer'
      );
      return state.set('loading', true).set('error', null);
    case FETCH_TWEETS_SUCCESS:
      Log.trace('FETCH_TWEETS_SUCCESS: loading set to false', 'Tweets reducer');
      Log.trace(
        `FETCH_TWEETS_SUCCESS: data/tweets set to ${fromJS(action.tweets)}`,
        'Tweets reducer'
      );
      return state.set('tweets', fromJS(action.tweets)).set('loading', false);
    case LOAD_REPOS_ERROR:
      Log.trace(
        `LOAD_REPOS_ERROR: Set loading to false Set Error to ${action.error}`,
        'Tweets reducer'
      );
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default tweetsReducer;
