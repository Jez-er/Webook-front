import style from './accauntpanel.module.scss'

const AccauntPanel = () => {
	const handleButtonClick = () => {
    window.location.href = '/authentication';
  };
	return (
		<div className={style.body}>
			<div className={style.wraper}>
				<button className={style.button} onClick={handleButtonClick} >Увійти в акаунт</button>
			</div>
		</div>
	)
}

export { AccauntPanel }

