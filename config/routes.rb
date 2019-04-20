Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Point to controller # the your function, we want this to be the root page
  root 'get_datas#index'
end
