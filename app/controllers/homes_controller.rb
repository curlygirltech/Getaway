class HomesController < ApplicationController
  before_action :set_home, only: [:show, :update, :destroy]

  # GET /homes
  def index
    @homes = Home.all

    render json: @homes
  end

  # GET /homes/1
  def show
    #first find home 
    Home.find(home_params)
    #find all reviews associated with home 
    #look at review numbers and avg them 
    #append avg number to home object
    render json: @home
  end

  # POST /homes
  def create
    @home = Home.new(home_params)
    
    #create a method to only allow hosts to create homes 
    host &&
    if @home.save
      render json: @home, status: :created,
    else
      render json: @home.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /homes/1
  # def update
  #   if @home.update(home_params)
  #     render json: @home
  #   else
  #     render json: @home.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /homes/1
  def destroy
    #create a method where only hosts can destroy homes
    @home.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_home
      @home = Home.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def home_params
      params.require(:home).permit(:user_id, :img_url, :description, :rate, :num_beds, :num_baths, :avg_rating)
    end
end
