Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :complaints, only: [:index]
  # get '/api/v1/complaints', to: "complaints#index"
  namespace :api do
    namespace :v1 do
      get '/complaints/search', to: 'complaints#search'
      get '/complaints/grouped', to: 'complaints#grouped'
      get '/', to: redirect('/api/v1/complaints')
      resources :complaints, only: [:index, :show]
      resources :boroughs, only: :index
      get '/boroughs/:name', to: 'boroughs#show'
      get '/boroughs/:name/:number', to: redirect('/api/v1/zip_codes/%{number}')
      resources :zip_codes, only: :index
      get '/zip_codes/:number', to: 'zip_codes#show'
      get '/zip_codes/:number/:id', to: redirect('/api/v1/complaints/%{id}')
    end
  end
end
