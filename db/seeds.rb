# Product.create!(name: '', blurb: '')


Company.create!(name: 'The Doughnut Factory', address: '123 Baker Street')

Product.create!(company_id: Company.find_by_name('The Doughnut Factory').id, name: 'Choklad Massage', blurb: 'A chocolate massage for the best day ever.')
Product.create!(name: 'Canvas bag', blurb: 'Lots of pockets for hiding your various awesome stuff.')
Product.create!(name: 'Choklad Princessan', blurb: 'Chocolate solves everything')
Product.create!(name: 'Diet bars', blurb: 'Diet food if you want it, but you don\'t need it because you\'re beautiful.')
Product.create!(name: 'asdf', blurb: 'asdf')
Product.create!(name: 'asdf', blurb: 'asdf')
Product.create!(name: 'asdf', blurb: 'asdf')
Product.create!(name: 'asdf', blurb: 'asdf')
Product.create!(name: 'asdf', blurb: 'asdf')
Product.create!(name: 'asdf', blurb: 'asdf')