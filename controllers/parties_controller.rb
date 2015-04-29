class PartiesController < Sinatra::Base
  enable  :sessions

  # ***** Helpers *****
  def party_params
    return params[:party] if params[:party]
    body_data = {}
    @request_body ||= request.body.read.to_s
    body_data = (JSON(@request_body)) unless @request_body.empty?
    body_data = body_data['party'] || body_data
  end


  get '/' do
    content_type :json
    party = Party.all
    party.to_json(include: :foods)
  end


  get '/:id' do
    content_type :json
    party = Party.find(params[:id].to_i)
    party.to_json(include: :foods)
  end

  post '/' do
    content_type :json
    newParty = Party.create(params[:party])
    newParty.to_json(include: :foods)
  end

  patch '/:id' do
    content_type :json
    party = Party.find(params[:id].to_i)
    party.update(params[:party])
  end

  put '/:id' do
    content_type :json
    party = Party.find(params[:id].to_i)
    party.update(params[:party])
  end

  delete '/:id' do
    content_type :json
    party = Party.find(params[:id].to_i)
    party.destroy
  end

end
