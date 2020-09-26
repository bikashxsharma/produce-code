import React from 'react'

import './style.scss'

type CardProps = {
	title: string
	picture?: string
}

const CategoryCard: React.FC<CardProps> = ({
	title,
	picture,
}) => {
	return (
		<div className='category-item'>
			<img
				src='https://cdn.pixabay.com/photo/2019/02/24/13/05/apple-icon-4017545_1280.png'
				alt='apple'
				className='category-item__icon'
			/>

			<p className='category-item__title'>
				{title}
			</p>
		</div>
	)
}

export default CategoryCard
