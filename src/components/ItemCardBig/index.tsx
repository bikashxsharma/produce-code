import React from 'react'

import './style.scss'

type ItemCardBigProps = {
	title: string
	code: string
	picture?: string
}
const ItemCardBig: React.FC<ItemCardBigProps> = ({
	title,
	code,
	picture,
}) => {
	return (
		<div className='item-card-big'>
			<div className='item-card-big__icon-circle'>
				<img
					src='https://freepngimg.com/thumb/banana/26-banana-png-image-bananas-picture-download.png'
					alt='banana'
				/>
			</div>
			<p className='item-card-big__title'>
				{title}
			</p>
			<h2 className='item-card-big__code'>
				{code}
			</h2>
		</div>
	)
}

export default ItemCardBig
