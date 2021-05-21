import { min } from 'react-native-reanimated';
import styled from 'styled-components/native';
import color from '../../styles/color';
import fonts, { assets } from '../../../react-native.config';

 /* --------- Estilização e criação de components (tela do Login Inical)--------*/

     /* Estilização do Container */
export const ScreenInitialLogin = styled.KeyboardAvoidingView`
   flex:1;
   justify-content:center;
   align-items:center;
   display:flex;
`;
    /* Estilização da imagem */
export const Image = styled.ImageBackground`
   width: 100%;
   height: 100%;
`;
       /* Estilização do container da página */
export const ViewInitialLogin = styled.View`
   
`;
       /* Estilização do container do conteúdo */
export const ViewStylePage = styled.View`
   flex-direction:column;
   justify-content:center;
   align-items:center;
   display:flex;
`;
      /* Estilização do container do logo */
export const ViewStyleLogo= styled.View`
   margin-top:12%;
`; 
      /* Estilização do Logo Busaqui */
export const LogoBusaqui = styled.Image`
   width:157px;
   height:51.02px;
`;
        /* Estilização do container do título */
export const ViewStyleTitle = styled.View`
   margin-top:19.3%;
   width:65.5%;
   height:16%;
   justify-content:center;
   align-items:center;
`;
        /* Estilização do título */
export const Title = styled.Text`
   font-family: 'Montserrat-Medium';
   font-size:42px;
   font-weight:normal;
   color:${color.Branco};
   text-shadow: 1px 1px 1px ${color.CinzaEscuro};
`;
        /* Estilização do container do subtítulo */
export const ViewStyleSubtitle = styled.View`
   width:72.8%; 
   height:14%;
   justify-content:center;
   align-items:center;
   margin-top:9%;
`;
        /* Estilização do subtítulo */
export const Subtitle = styled.Text`
   font-family: 'Montserrat-Medium';
   font-weight:normal;
   font-size:13px;
   color:${color.Branco}; 
   text-shadow: 1px 1px 1px ${color.Cinza};
`;
       /*Estilização do botão de Entrar em Login */
export const ButtomSubscribe = styled.TouchableHighlight`
   width: 169px;
   height: 56px;
   border: 2px solid ${color.Branco};
   border-radius: 8px;
   justify-content:center; 
   align-items: center; 
   padding: 14px 18px;
   margin-top:18%;
`;
       /*Estilização do texto do botão de Entrar em Login */
export const ButtomSubscribeText = styled.Text`
   color: ${color.Branco};
   font-size: 15px;
   font-family: 'Montserrat-Medium';
`;

 