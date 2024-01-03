import * as i18n from 'react-i18next';
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

interface Props {
  theme: string;
}

export const Contact = ({ theme }: Props) => {
  const { t } = i18n.useTranslation('CONTACT');

  const schema = yup.object().shape({
    name: yup.string().required(t('ERROR_NAME')),
    phone: yup
      .string()
      .required(t('ERROR_PHONE_1'))
      .matches(/^\+\d{2}\s\(\d{2}\)\s\d{5}-\d{4}$/, t('ERROR_PHONE_2')),
    email: yup.string().email(t('ERROR_EMAIL_1')).required(t('ERROR_EMAIL_2')),
    message: yup.string().required(t('ERROR_MESSAGE')),
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
    toast.warning(
      'Funcionalidade ainda não implementada, peço que envie o email manualmente :)',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      }
    );
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
      <BehindTitle>{t('BEHIND_TITLE')}</BehindTitle>
      <Title>{t('TITLE_1')}</Title>

      <Content>
        <LeftSide>
          <TitleLeft>{t('TITLE')}</TitleLeft>
          <TextLeft>{t('SUBTITLE')}</TextLeft>
          <Info>
            <Logo
              src={
                theme === 'dark'
                  ? '/Images/Contact/map-yellow.png'
                  : '/Images/Contact/map-blue.png'
              }
            />
            <Data>
              <SubText>{t('LOGO_1')}</SubText>
              <Text>Itaquaquecetuba, São Paulo</Text>
            </Data>
          </Info>
          <Info>
            <Logo
              src={
                theme === 'dark'
                  ? '/Images/Contact/mail-yellow.png'
                  : '/Images/Contact/mail-blue.png'
              }
            />
            <Data>
              <SubText>{t('LOGO_2')}</SubText>
              <Text>kauan.s.leite@gmail.com</Text>
            </Data>
          </Info>
          <Info>
            <Logo
              src={
                theme === 'dark'
                  ? '/Images/Contact/phone-yellow.png'
                  : '/Images/Contact/phone-blue.png'
              }
            />
            <Data>
              <SubText>{t('LOGO_3')}</SubText>
              <Text>+55 (11) 96172-8880</Text>
            </Data>
          </Info>
          <Social>
            <a href="https://www.instagram.com/kauansleite/" target="_blank">
              <MediaBtn src="/Images/Contact/instagram.png" />
            </a>
            <a href="https://twitter.com/_KauanLeite_" target="_blank">
              <MediaBtn src="/Images/Contact/twitter.png" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=11961728880&text=Ol%C3%A1+vim+atrav%C3%A9s+do+seu+portf%C3%B3lio+e+gostaria+de+conversar+um+pouco+mais%21%21%21&type=phone_number&app_absent=0"
              target="_blank"
            >
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
                placeholder={t('INPUT_MESSAGE')}
                multiline
                rows={11}
                fullWidth
                error={!!errors?.message}
                helperText={errors?.message?.message}
              />
            </LineThree>
            <LineFour>
              <BtnSend type="submit">{t('BTN_SEND')}</BtnSend>
            </LineFour>
          </form>
        </RightSide>
      </Content>
    </Container>
  );
};
