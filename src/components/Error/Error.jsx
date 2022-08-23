import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import * as S from './style';
import { makeStyles } from '@material-ui/core/styles';
import dog_error from '../../assets/images/dog_error.png';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Error = ({ error }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <S.ErrorWrapper>
        <S.ErrorDog src={dog_error} alt='dog_error' />
        <S.ErrorMessage>{error}</S.ErrorMessage>
        <S.ButtonReload
          onClick={() => (window.location.href = window.location.href)}
        >
          Refresh Page
        </S.ButtonReload>
      </S.ErrorWrapper>
    </Backdrop>
  );
};

export default Error;
