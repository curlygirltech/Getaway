Rails.application.routes.draw do
  
  resources :bookings 
  resources :homes 
  resources :users, only: [:show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
