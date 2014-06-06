Curio::Application.routes.draw do
  devise_for :admins
  devise_for :users
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  root to: 'products#index'
  resources :products

  post '/tipsa', to: 'contacts#create'
  get '/tipsa', to: 'contacts#new'
end
