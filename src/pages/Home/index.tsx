import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

import Header from 'components/Header'
import CategoryCard from 'components/CategoryCard'
import ItemCardBig from 'components/ItemCardBig'
import { items } from './items'

import './style.scss'

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<h1>Susmita Store, Ontario</h1>
			{/** Search input //TODO make seperate component */}
			<div className='search-input'>
				<SearchIcon className='search-input__icon' />
				<input
					type='search'
					placeholder='Search'
				/>
			</div>
			{/** Category cards //TODO make seperate component sliding */}
			<div className='categories-cards'>
				<CategoryCard title='fruits' />
				<CategoryCard title='Bread' />
				<CategoryCard title='Veggies' />
			</div>
			{/** Cards component //TODO make seperate component */}
			<div className='item-cards-big'>
				<h2>Fruits</h2>
				<div className='item-cards-big__cards'>
					{items.map((item) => (
						<ItemCardBig
							title={item.title}
							code={item.code}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
