Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :complaints, only: [:index]
  # get '/api/v1/complaints', to: "complaints#index"
  namespace :api do
    namespace :v1 do
      resources :complaints, only: :index
      resources :boroughs, only: :index
      resources :zip_codes, only: :index
    end
  end
end
