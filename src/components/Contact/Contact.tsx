import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IMaskInput } from 'react-imask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BehindTitle,
  BtnSend,
  Container,
  Content,
  Data,
  Info,
  Input,
  LeftSide,
  LineFour,
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MediaBtn,
  RightSide,
  Social,
  SubText,
  Text,
  TextLeft,
  Title,
  TitleLeft,
} from './styles';

type Inputs = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required('O campo nome deve ser preenchido'),
    phone: yup
      .string()
      .required('O campo telefone deve ser preenchido')
      .matches(/^\+\d{2}\s\(\d{2}\)\s\d{5}-\d{4}$/, 'Insira um número válido'),
    email: yup
      .string()
      .email('Insira um email válido')
      .required('O campo email deve ser preenchido'),
    message: yup.string().required('O campo mensagem deve ser preenchido'),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    toast.success('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <Container id="contact">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BehindTitle>NETWORKING</BehindTitle>
      <Title>CONTACT</Title>

      <Content>
        <LeftSide>
          <TitleLeft>ENTRE EM CONTATO!</TitleLeft>
          <TextLeft>
            Estou à disposição para esclarecer dúvidas relacionadas à área ou
            simplesmente para bater um papo. Sinta-se à vontade para entrar em
            contato e compartilhar suas perguntas ou apenas trocar ideias.
          </TextLeft>
          <Info>
            <Logo src="/Images/Contact/map.png" />
            <Data>
              <SubText>Endereço</SubText>
              <Text>Itaquaquecetuba, São Paulo</Text>
            </Data>
          </Info>
          <Info>
            <Logo src="/Images/Contact/mail.png" />
            <Data>
              <SubText>E-mail</SubText>
              <Text>kauan.s.leite@gmail.com</Text>
            </Data>
          </Info>
          <Info>
            <Logo src="/Images/Contact/phone.png" />
            <Data>
              <SubText>Telefone</SubText>
              <Text>+55 (11) 96172-8880</Text>
            </Data>
          </Info>
          <Social>
            <a href="#" target="_blank">
              <MediaBtn src="/Images/Contact/instagram.png" />
            </a>
            <a href="#" target="_blank">
              <MediaBtn src="/Images/Contact/twitter.png" />
            </a>
            <a href="#" target="_blank">
              <MediaBtn src="/Images/Contact/whatsapp.png" />
            </a>
          </Social>
        </LeftSide>
        <RightSide>
          <form onSubmit={handleSubmit(onSubmit)}>
            <LineOne>
              <Input
                {...register('name')}
                placeholder="Kauan da Silva Leite"
                fullWidth
                error={!!errors?.name}
                helperText={errors?.name?.message}
              />
              <Input
                {...register('phone')}
                placeholder="+55 (11) 96172-8880"
                fullWidth
                InputProps={{
                  inputComponent: IMaskInput,
                  inputProps: {
                    mask: '+00 (00) 00000-0000',
                  },
                }}
                error={!!errors?.phone}
                helperText={errors?.phone?.message}
              />
            </LineOne>
            <LineTwo>
              <Input
                {...register('email')}
                placeholder="kauan.s.leite@gmail.com"
                fullWidth
                error={!!errors?.email}
                helperText={errors?.email?.message}
              />
            </LineTwo>
            <LineThree>
              <Input
                {...register('message')}
                type="text"
                placeholder="Insira sua mensagem..."
                multiline
                rows={11}
                fullWidth
                error={!!errors?.message}
                helperText={errors?.message?.message}
              />
            </LineThree>
            <LineFour>
              <BtnSend type="submit">Enviar</BtnSend>
            </LineFour>
          </form>
        </RightSide>
      </Content>
    </Container>
  );
};
