import React, {
	useState,
	useEffect,
} from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import Header from 'components/Header'
import CategoryCard from 'components/CategoryCard'
import ItemCardBig from 'components/ItemCardBig'
import { items } from './items'

import './style.scss'

const Home = () => {
	const [search, setSearch] = useState(
		'',
	)
	const [
		filteredItems,
		setFilteredItems,
	] = useState(items)

	const updateSearch = (e: any) => {
		setSearch(e.target.value)
		console.log(e.target.value)
	}
	const clearSearch = () => {
		setSearch('')
	}

	useEffect(() => {
		if (search !== '') {
			const _items = items.filter(
				(obj) =>
					obj.title.includes(search),
			)
			setFilteredItems(_items)
		}
		if (search === '') {
			setFilteredItems(items)
		}
	}, [search])

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
					value={search}
					onChange={updateSearch}
				/>
				{search !== '' && (
					<HighlightOffIcon
						onClick={clearSearch}
						className='search-input__clear'
					/>
				)}
			</div>

			{/** Category cards //TODO make seperate component sliding */}
			{search === '' && (
				<>
					<div className='categories-cards'>
						<CategoryCard title='fruits' />
						<CategoryCard title='Bread' />
						<CategoryCard title='Veggies' />
					</div>
				</>
			)}

			{/** Cards component //TODO make seperate component */}
			<div className='item-cards-big'>
				{search === '' && (
					<h2>Fruits</h2>
				)}

				<div className='item-cards-big__cards'>
					{filteredItems.map((item) => (
						<div key={item.code}>
							<ItemCardBig
								title={item.title}
								code={item.code}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
